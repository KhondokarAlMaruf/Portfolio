import Skill from "../Skill/Skill";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
