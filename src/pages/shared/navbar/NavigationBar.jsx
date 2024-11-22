import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
// import { Link } from "react-router-dom";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className=" text-xl hover:text-red-700 cursor-pointer"


          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className=" text-xl hover:text-red-700 cursor-pointer"
          >
            Skills
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link 
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className=" text-xl hover:text-red-700 cursor-pointer"
          
          >Projects</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link 
          to="experience"
        
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className=" text-xl hover:text-red-700 cursor-pointer"
          
          >Experience</Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
           to="contact"
      
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className=" text-xl hover:text-red-700 cursor-pointer"
           
           >Contact</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
