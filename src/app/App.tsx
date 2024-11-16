// Assets
import ButtonGradient from "@/assets/svg/ButtonGradient";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefit from "@/components/Benefit";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefit />
      <Collaboration />
      <Services />
      <Pricing />

      <ButtonGradient />
    </>
  );
}

export default App;
