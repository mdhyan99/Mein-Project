import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import data from "../../data/data.json";
import Product from "../Product";

const Video = () => {
    const data_Video = data.filter((d) => d.category === "video");
    return (
        <Container>
            <h2>Video</h2>
            <Row md={2} xs={1} lg={4} className="g-3">
                {data_Video.map((item) => (
                    <Col key={item.id}>
                        <Product {...item} />
                        {/* das kommt von Product.js */}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Video;
