import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane, FaHome, FaPhoneAlt, FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">

      <motion.h2
              className="text-4xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.h2>
        {/* Main content container with flex layout */}
        <div className="flex flex-col lg:flex-row justify-between  gap-12">

          {/* Left side content */}
          <div className="lg:w-1/3">
            <div className="mb-6">
              <p className="text-2xl ">Sabilar Rahman</p>
              <p className="text-xl">
                <FaHome className="inline " /> Mirpur, Bangladesh
              </p>
              <p className="text-xl">
                <FaPhoneAlt className="inline " /> +88 01874736061
              </p>
              <p className="text-xl">
                <FaEnvelope className="inline " /> sabilarrahman36@gmail.com
              </p>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-4  text-2xl">
              <a
                target="_blank"
                href="https://github.com/sabilar-rahman"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sabilar-rahman/"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/sabilar.rahman.2/"
                rel="noreferrer"
              >
                <FaFacebook />
                
              </a>
              <a
                target="_blank"
                href="https://x.com/SabilarRahman"
                rel="noreferrer"
              >
                <FaXTwitter />
                
              </a>
            </div>
          </div>

          {/* Right side content (Contact form) */}
          <div className="lg:w-2/3">
            {/* Heading */}
           

            {/* Contact Form */}
            <div className="flex justify-center">
              <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
                <form>
                  {/* Name Input */}
                  <div className="mb-6">
                    <label
                      htmlFor="client-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <FaUser className="inline-block mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="client-name"
                      placeholder="Enter your name"
                      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <FaEnvelope className="inline-block mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <FaPaperPlane className="inline-block mr-2" />
                       Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      rows="2"
                      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      className="w-full text-white bg-blue-600 py-3 font-semibold rounded-lg shadow-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
