import { FAQ } from "./components/faq";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero";
import { KnowledgeBase } from "./components/knowledgeBase";
import { Navbar } from "./components/navbar";
import SlidingText from "./components/slidingText";
import { Technology } from "./components/technologyComp";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <KnowledgeBase/>
      <SlidingText/>
      <Technology/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
