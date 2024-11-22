import { AlignJustify } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";



// import { useLogoutUserMutation } from "@/redux/featuresApi/auth/authApi";
import { useDispatch, useSelector } from "react-redux";

import {
  Link,

  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";


import { toast } from "sonner";


const NavigationAction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);




  return (
    <div>
      <div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col space-y-4 items-start  w-full mt-4 text-black ">
                    <Link
                      to="home"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                       className="cursor-pointer hover:underline"
                    >
                      Home
                    </Link>
                    <Link
                      to="skills"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                       className="cursor-pointer hover:underline"
                    >
                      Skills
                    </Link>
                    <Link
                      to="projects"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                       className="cursor-pointer hover:underline"

                    >Projects</Link>

                    <Link
                      to="experience"

                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                       className="cursor-pointer hover:underline"

                    >Experience</Link>
                    <Link
                      to="contact"

                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                       className="cursor-pointer hover:underline"

                    >Contact</Link>

                    {/* {user ? (
                      <Button variant="destructive" >
                        Logout
                      </Button>
                    ) : (
                      <Button variant="destructive">
                        <Link to="/login">Login</Link>
                      </Button>
                    )} */}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex md:space-x-4">
          <div className="flex items-center space-x-4">
            {/* Logout Button */}
            <Button
              variant="destructive"
              onClick={() => window.open('https://drive.google.com/file/d/1P14_MnXxwO-nsBaWFbddxiqPQ-LUnqBx/view?usp=sharing', '_blank')}
            >
              Resume
            </Button>

          </div>


        </div>






      </div>
    </div>
  );
};

export default NavigationAction;
