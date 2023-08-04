import { Col, Container } from "react-bootstrap";

const ClientSection = () => {
    return (
        <div>
            <Container className="text-center">
                <h1>Leading companies build teams on TopHire</h1>
                <Col md={12} className="company-logo-list"></Col>
            </Container>
        </div>
    )
}

export default ClientSection;