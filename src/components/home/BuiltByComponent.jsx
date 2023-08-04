import { Container } from "react-bootstrap";

const BuiltByComponent = () => {
    return (
        <div className="mb-5 pb-5">
            <Container className="text-center">
            <h1 >Built by techies, for techies 👩‍💻👨‍💻</h1>
            <p> It takes less than 5 minutes to sign up.</p>
            <a className="btn btn-primary btn-lg" id="hero-btn" href="/candidate/signup">Apply to join</a>
            </Container>
        </div>
    )
}
export default BuiltByComponent ;