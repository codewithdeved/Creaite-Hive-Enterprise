// Features Components
import AboutUs from "../features/aboutus/AboutUs";
import Hero from "../features/hero/Hero";
import Services from "../features/services/Services";
import Market from "../features/market/Market";
import Faq from "../features/faq/Faq";
import CallToAction from "../features/calltoaction/CallToAction";
import Footer from "../features/footer/Footer";

export default async function HomePage() {

    return (

        <div className="main">

            <Hero />

            <AboutUs />

            <Services />

            <Market />

            <Faq />

            <CallToAction />

            <Footer />

        </div>

    )

}