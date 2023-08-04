import { Col, Container, Row } from "react-bootstrap";

const FooterComponent = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4}>
                        <h2 className="logo"><img className="" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/Tophire%20Logo_Website%20Horizontal%20White_350x75.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/Tophire%20Logo_Website%20Horizontal%20White_350x75.png" alt="TopHire Logo" /></h2>
                        <div className="mission">
                            TopHire is on a mission to make it dead simple for leading Indian startups
                            to hire the top 2% of tech talent.
                        </div>
                        <div className="social-networks mt-3 mb-3">
                            <a href="https://twitter.com/@tophire_co" className="twitter" target="_blank" rel="noopener"><i className="bi bi-twitter text-white p-2 m-1"></i></a>
                            <a href="https://www.facebook.com/tophire.co/" className="facebook" target="_blank" rel="noopener"><i className="bi bi-facebook text-white p-2 m-1"></i></a>

                            <a href="https://www.linkedin.com/company/tophire-co/" className="linkedin" target="_blank" rel="noopener"><i className="bi bi-linkedin text-white p-2 m-1"></i></a>
                            <a href="https://www.instagram.com/tophire_co/" className="instagram" target="_blank" rel="noopener"><i className="bi bi-instagram text-white p-2 m-1"></i></a>
                        </div>
                    </Col>
                    <Col md={2}>
                        <h5>Candidates</h5>
                        <ul>
                            <li><a href="/">For Candidates</a></li>
                            <li><a href="/candidate/signup">Candidate Sign Up</a></li>
                            <li><a href="/candidate/signup/referral-program">Invite &amp;
                                Earn ₹15k</a></li>
                            <li><a href="https://tophire.co/faq/candidate">Candidate FAQ</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Employers</h5>
                        <ul>
                            <li><a href="/employers">For Employers</a></li>
                            <li><a href="/recruiter/signup">Employer Sign Up</a></li>
                            <li><a href="https://tophire.co/faq/employer">Employer FAQ</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Company</h5>
                        <ul>
                            <li><a href="https://tophire.freshteam.com/jobs" target="_blank" rel="noopener">Careers</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/e/2PACX-1vSfNZzb0SBfMaYv9guvEZXuzR9fgj8J_lDSmN9maVmCRQewtIZRFl7Wq0qB2hmJNlOf2y8dV_s97U_6/pub">Privacy
                                    Policy</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Partners</h5>
                        <div>
                            <a target="_blank" href="https://tophire.co/faq/employer/why-do-i-see-a-codechef-badge-on-certain-candidates" >
                                <img style={{ height: "45px" }} src="https://d383au3bye3rv1.cloudfront.net/static/images/landing/codechef-directi-for-lp.png" alt="TopHire Logo" />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="footer-copyright">
                        <p>© 2023 SPSG TopHire. All Rights Reserved </p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent;