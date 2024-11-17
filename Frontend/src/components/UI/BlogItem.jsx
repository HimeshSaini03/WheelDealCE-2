import { useParams } from "react-router-dom";
import blogData from "../../assets/data/blogData";
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const BlogItem = () => {

    const { id } = useParams();

    const blogItem = blogData.find((item) => item.title === id);
    const title = blogItem.title;
    const author = blogItem.author;
    const date = blogItem.date;
    const time = blogItem.time;
    const imgUrl = blogItem.imgUrl;
    const description = blogItem.description;


  return (
    <Card>
      <div className="text-center"> {/* Center the image */}
        <CardImg top src={imgUrl} alt={title} style={{ maxWidth: '50%', margin: 'auto' }} />
      </div>
      <CardBody>
        <CardTitle tag="h2" style={{ color: '#000d6b', fontFamily: 'Arial, sans-serif' }}>{title}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">By {author} on {date}, {time}</CardSubtitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default BlogItem;
