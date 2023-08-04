import { Col, Container, Row } from "react-bootstrap";

const TestimonialsComponent = () => {
    return (
        <div className="testimonial-full-section mb-5 mt-5">
            <Container className="">
                <Row className="text-center mb-5 mt-5">
                    <h1 >Techies 💘TopHire</h1>
                    <p>
                        A better love story than twilight. Check the video below to find out why.
                    </p>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className="company">
                            <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/cred.png?123" />
                        </div>
                        <div className="candidate">
                            <div className="image"> <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/yadhu_manoharan.jpg?123" /></div>
                            <div>
                                <h4 className="candidate-name">Yadhu Manoharan
                                    <a href="https://www.linkedin.com/in/yadhu-manoharan-92020083/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                </h4>
                                <span className="candidate-role">Sr. iOS Engineer</span>
                            </div>
                        </div>
                        <div className="testimonial-content">

                            TopHire was able to make the process really easy. They were able to schedule interviews
                            with the best companies in the industry and drove the entire process smoothly.
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="company">
                            <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/dream11.png?123" />
                        </div>
                        <div className="candidate">
                            <div className="image"> <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/santosh_nain.jpeg?123" /></div>
                            <div>
                                <h4 className="candidate-name">Santosh Nain
                                    <a href="https://www.linkedin.com/in/santoshnain/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                </h4>
                                <span className="candidate-role">SDE-2</span>
                            </div>
                        </div>
                        <div className="testimonial-content">

                            A friend of mine told me about TopHire when I started looking for new opportunities. The
                            TopHire team was extremely helpful,
                            professional and quick with everything.

                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="company">
                            <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/curefit.png?123" />
                        </div>
                        <div className="candidate">
                            <div className="image"> <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/tarun_dugar.jpeg?123" /></div>
                            <div>
                                <h4 className="candidate-name">Tarun Dugar
                                    <a href="https://www.linkedin.com/in/tarundugar/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                </h4>
                                <span className="candidate-role">Sr. Software Engineer</span>
                            </div>
                        </div>
                        <div className="testimonial-content">

                            Compared to other job portals, what stood out for me was that TopHire,
                            on top of providing really good opportunities,
                            helped me in negotiations with the companies too.

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TestimonialsComponent;