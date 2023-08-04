import { Col, Container, Row } from "react-bootstrap";

const FeaturesComponent = () => {
    return (
        <div>
            <Container>
                <div className="text-center mb-5 pb-5">
                    <h1>How It Works </h1>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="stylishLine mb-3"></div>
                        <h2 className="mb-3"><span style={{ color: "#39a7f4" }}>Create your free candidate profile</span></h2>
                        <p className="mt-5 mb-4">
                            Answer a few questions about yourself - it takes less than 5 minutes.
                        </p>
                        <ul>
                            <li >‍<span >🏅</span> What is your biggest
                                achievement?
                            </li>
                            <li >‍<span >👑️</span> What does your ideal
                                opportunity look like?
                            </li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Create%20Profile.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Create%20Profile.png" alt="" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6}>
                        <img className="img-fluid" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Companies%20Compete.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Companies%20Compete.png" alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="stylishLine mb-3"></div>
                        <h2 className="mb-3"><span style={{ color: "#39a7f4" }}>Sit back while companies compete to hire you</span></h2>
                        <p className="mt-5 mb-4">
                            Don’t waste your time reaching out to companies or dealing with recruiters.
                        </p>
                        <ul>
                            <li>‍<span >💨</span> We fast-track your profile to
                                hiring managers.
                            </li>
                            <li >‍<span >🙆‍♂️</span>
                                Get multiple interview requests with upfront salary offers within days.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6}>
                        <div className="stylishLine mb-3"></div>
                        <h2 className="mb-3"><span style={{ color: "#39a7f4" }}>Salary & Role transparency</span></h2>
                        <p className="mt-5 mb-4">

                            Interview requests from companies mention salary and role details upfront - before you
                            decide to accept or decline them.

                        </p>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Transparency.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Transparency.png" alt="" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6}>
                        <img className="img-fluid" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Dedicated%20Talent%20Advocate.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Dedicated%20Talent%20Advocate.png" alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="stylishLine mb-3"></div>
                        <h2 className="mb-3"><span style={{ color: "#39a7f4" }}>A dedicated talent advocate</span></h2>
                        <p className="mt-5 mb-4">

                            Your Talent Advocate will guide you through the entire process. From polishing your
                            profile, providing interview tips to helping negotiate offers!

                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6}>
                        <div className="stylishLine mb-3"></div>
                        <h2 className="mb-3"><span style={{ color: "#39a7f4" }}>Current and past employers can’t see your profile</span></h2>
                        <p className="mt-5 mb-4">

                            By default, we hide your profile from any employers that you list as your current and
                            past employer.

                        </p>
                        <ul>
                            <li >‍<span >🕵</span> Privacy Assured
                            </li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Privacy.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Privacy.png" alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default FeaturesComponent;