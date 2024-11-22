import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export function Banner() {
  return (
    <div className=" bg-gray-900"  id="home">

      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen text-white px-6 container mx-auto">
        {/* Left Part */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">


          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}

          >
            {/* Animated Header Section */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2"
            >
              Hello, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-500 mb-4"
            >
              Sabilar Rahman
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl  font-bold mb-6"
            >
              <Typewriter
                words={[
                  "Front-End Developer",
                  "MERN Stack Web Developer",


                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={800}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
             <a
  href="#contact"
  className="inline-block bg-white bg-opacity-30 font-bold py-3 px-8 rounded-full backdrop-blur-sm hover:bg-white hover:bg-opacity-40 transition duration-300 transform hover:scale-105 shadow-lg"
>
  Get In Touch
</a>
            </motion.div>
          </motion.div>

        </div>

        {/* Right Part */}

        <div className="lg:w-1/2 flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}

          >
            {/* Illustration/Description */}
            <h2 className="text-gray-400 text-center lg:text-left max-w-lg">
              Hi there! I'm a creative and driven MERN stack developer who thrives on the thrill of turning ideas into seamless digital experiences. I believe coding is more than just writing lines of code—it's about crafting solutions that make life easier and more exciting.
              <br /><br />
              My journey is fueled by a love for innovation, learning, and a commitment to growth. From building scalable applications to designing user-friendly interfaces, I strive to combine functionality with creativity. Whether solving complex challenges or exploring cutting-edge technologies, I approach every project with passion and purpose. Let's build something extraordinary together!
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
