import { Row, Container, Col } from "react-bootstrap";
import HeroComponent from "../components/home/HeroComponent";
import ClientSection from "../components/home/ClientSection";
import FeaturesComponent from "../components/home/FeaturesComponent";
import TestimonialsComponent from "../components/home/TestimonialsComponent";
import BuiltByComponent from "../components/home/BuiltByComponent";

const Home = () => {
    return (
        <>
            <HeroComponent />
            <ClientSection />
            <FeaturesComponent />
            <TestimonialsComponent />
            <BuiltByComponent />
        </>
    )
}

export default Home;