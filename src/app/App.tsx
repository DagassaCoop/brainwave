// Assets
import ButtonGradient from "@/assets/svg/ButtonGradient";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefit from "@/components/Benefit";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
