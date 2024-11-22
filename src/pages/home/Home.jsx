import { Banner } from "./BannnerCarousel/Banner";

import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Projects from "./Porjects/Projects";
import Skills from "./Skills/Skills";


const Home = () => {
  return (
    <div >
      <Banner className="container mx-auto" />
      <Skills className="container mx-auto"/>
      <Projects/>
      <Blogs/>
      <Experience/>
      <Contact/>


    </div>
  );
};

export default Home;
