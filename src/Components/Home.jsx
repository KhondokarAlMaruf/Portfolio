import Skill from "../Skill/Skill";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className="max-w-[992px] mx-auto">
      <Header></Header>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
