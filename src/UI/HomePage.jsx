import Consult from "../component/Consulting/Consult";
import Core from "../component/Core/Core";
import Experience from "../component/Experience/Experience";
import Flagship from "../component/Flagship/Flagship";
import Footer from "../component/Footer/Footer";
import Herosection from "../component/Herosection/Herosection";
import Navbar from "../component/Navbar/Navbar";
import Product from "../component/Product/Product";
import Technology from "../component/Technology/Technology";
import EmptyDiv from "./EmptyDiv";

function HomePage() {
  return (
    <>
      {/* navbar */}
      <header>
        <Navbar />
      </header>
      {/* hero-section */}
      <Herosection />
      {/* product developement */}
      <Product />
      {/* consult strategy */}
      <Consult />
      {/* core principles */}
      <Core />
      {/* flagship */}
      <Flagship />
      {/* Technology */}
      <Technology />
      {/* Experience */}
      <Experience />
      {/* Footer */}
      <Footer />
      <EmptyDiv />
    </>
  );
}

export default HomePage;
