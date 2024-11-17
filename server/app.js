require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB is connected'))
  .catch(err => console.log(err));

const paymentSchema = new mongoose.Schema({
    session_id: String,
    payment_status: String,
    customer_email: String,
    payment_amount: Number,
    payment_currency: String,
    products: Array,
    created_at: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

app.set('view engine', 'ejs');

app.get('/checkout', (req, res) => {
    res.render('index.ejs');
});

app.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'Pre-Booking Charges'
                    },
                    unit_amount: 510000
                },
                quantity: 1
            },
            {
                price_data: {

                    currency: 'inr',
                    product_data: {
                        name: 'Security Fee(Refundable)'
                    },
                    unit_amount: 1000000
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        shipping_address_collection: {
            allowed_countries: ['IN']
        },
        success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`
    });

    res.redirect(session.url);
});

app.get('/complete', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['payment_intent.payment_method'] });
        const lineItems = await stripe.checkout.sessions.listLineItems(req.query.session_id);
//mongo db data
        const paymentData = new Payment({
            session_id: session.id,
            payment_status: session.payment_status,
            customer_email: session.customer_details.email,
            payment_amount: session.amount_total,
            payment_currency: session.currency,
            products: lineItems.data.map(item => ({
                name: item.description,
                amount: item.amount_total,
                currency: item.currency,
                quantity: item.quantity
            }))
        });

        await paymentData.save();
        console.log('Payment data saved to MongoDB');

        res.redirect('http://localhost:3000/checkout');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your payment');
    }
    
});

app.get('/cancel', (req, res) => {
    res.redirect('http://localhost:3000/checkout');
});

app.listen(3000, () => console.log('Server started on port 3000'));
