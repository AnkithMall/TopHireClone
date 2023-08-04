import { Container, Row, Col, Button } from "react-bootstrap";

const HeroComponent = () => {
    return (
        <div className="hero">
            <Container id="hero-container">
                <Row className="align-items-center mb-4">
                    <Col className="md-12 text-center fs-5">
                        <h1>Find your next top tech <br className="d-block d-md-none" />job in 1 week.</h1>
                        <p className="">
                            <mark style={{ backgroundColor: 'yellow', fontWeight: "bold" }}>Are you a top 2%</mark> Software Engineer, Product
                            Manager or Data Scientist? <br className="d-none d-md-block" />Let leading Indian technology
                            <mark style={{ backgroundColor: 'yellow', fontWeight: "bold" }}>companies compete to hire you.</mark>
                        </p>
                        <br className="d-block d-md-none" />
                        <br className="d-block d-md-none" />
                        <a className="btn btn-primary btn-lg" id="hero-btn" style={{ marginTop: "50px" }} href="/candidate/signup">Apply to join</a>
                        <div className="text-muted fs-6" style={{ marginTop: "10px" }}>100% free. It takes only 5 minutes</div>
                    </Col>
                </Row>
                <Row className="align-items-center pt-5 mb-4">
                    <Col xs={12} md={4} pb={5} className="">
                        <div className="pb-3 d-flex justify-content-center align-items-center">
                            <div className="services-icon d-flex justify-content-center align-items-center">
                                <img className="" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" height="60" width="60" alt="Service" />
                            </div>
                        </div>
                        <div className="services-description">
                            <h5 className="text-center">Step 1: Complete Profile</h5>
                            <p className="text-center">
                                Once you are approved, we showcase you to leading Indian technology
                                startups
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} pb={5}>
                        <div className="pb-3 d-flex justify-content-center align-items-center">
                        <div className="services-icon d-flex justify-content-center align-items-center">
                            <img className="icon-2" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" height="60" width="60" alt="Service" />
                        </div>
                        </div>
                        <div className="services-description">
                            <h5 className="text-center">Step 2: Receive Job Offers</h5>
                            <p className="text-center">
                                Companies start sending interview requests. Talk to only the ones
                                you like.
                            </p>
                        </div>

                    </Col>
                    <Col xs={12} md={4} pb={5}>
                        <div className="pb-3 d-flex justify-content-center align-items-center">
                        <div className="services-icon d-flex justify-content-center align-items-center">
                            <img className="icon-3" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" height="60" width="60" alt="Service" />
                        </div>
                        </div>
                        <div className="services-description">
                            <h5 className="text-center">Step 3: Accept Dream Job</h5>
                            <p className="text-center">
                                Compare your offers and accept the best one. Hired!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroComponent;