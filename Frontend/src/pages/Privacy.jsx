import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";

// JSON object containing the content for the Privacy Policy
const privacyPolicyContent = {
  introduction: {
    title: "Introduction:",
    content: "Welcome to WheelDeal - Rent&Dealing's Privacy Policy. At WheelDeal - Rent&Dealing, we are committed to protecting your privacy and ensuring the security of your personal information."
  },
  informationCollected: {
    title: "Information Collected:",
    content: "We collect various types of information from users of our website, including personal information such as name, email address, and phone number, as well as browsing data collected through cookies and similar technologies."
  },
  useOfInformation: {
    title: "Use of Information:",
    content: "The information we collect is used to process orders, improve our services, personalize user experience, and communicate with users. We do not share or sell this information to third parties without consent, except as required by law."
  },
  dataSecurity: {
    title: "Data Security:",
    content: "We employ various security measures to protect the data we collect, including encryption, secure servers, and access controls. We strive to prevent unauthorized access, disclosure, alteration, or destruction of data."
  },
  thirdPartyServices: {
    title: "Third-Party Services:",
    content: "Our website may use third-party services or applications, such as payment processors and analytics tools, which may collect and use information according to their own privacy policies. We are not responsible for the privacy practices of these third parties."
  },
  cookiesAndTracking: {
    title: "Cookies and Tracking Technologies:",
    content: "We use cookies and similar tracking technologies to enhance user experience and analyze website usage. Users can manage cookie preferences and opt-out of tracking through their browser settings."
  },
  userRights: {
    title: "User Rights:",
    content: "Users have rights regarding their personal information, including the right to access, correct, or delete data. For inquiries or requests regarding privacy, please contact us at privacy@cardelivery.com."
  },
  childrensPrivacy: {
    title: "Children's Privacy:",
    content: "CarDelivery.com is not intended for children under the age of 13, and we do not knowingly collect personal information from minors. We comply with applicable children's privacy laws, including COPPA in the United States."
  },
  changesToPolicy: {
    title: "Changes to Privacy Policy:",
    content: "We may update our Privacy Policy periodically. Significant changes will be notified to users, and the effective date of the updated policy will be indicated at the top of the page."
  },
};

const PrivacyPolicy = () => {
  return (
    <Helmet>
    <CommonSection title="Privacy Policy" />
    <Container className="privacy-policy-container">
      <Row>
        <Col>
          {Object.values(privacyPolicyContent).map((section, index) => (
            <section key={index} style={{padding: "0px", marginBottom: "2.5rem"}}>
              <h3 style={{color: "#000d6b"}}>{section.title}</h3>
              <p>{section.content}</p>
            </section>
          ))}
        </Col>
      </Row>
    </Container>
    </Helmet>
  );
};

export default PrivacyPolicy;
