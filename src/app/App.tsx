// Assets
import ButtonGradient from "@/assets/svg/ButtonGradient";

// Components
import Button from "@/components/Button";
import Header from "@/components/Header";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10">Button</Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
