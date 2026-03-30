import { FaGithub } from "react-icons/fa";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="overflow-hidden lg:pt-0 pt-[50px]">
            <motion.div
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 lg:h-[750px] h-[1000px]"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
            >

                <div className="lg:flex  lg:ml-[170px] ml-5">

                    {/*  LEFT CONTENT */}
                    <div className="lg:mt-[250px] mt-0 lg:pt-0 pt-[50px]">

                        {/* TEXT ANIMATION */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:text-5xl text-3xl text-white font-bold mb-[10px]"
                        >
                            I'am Pathim Hossain
                        </motion.h1>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-pink-300 lg:text-4xl text-2xl font-black mb-3"
                        >
                            Web Developer
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="lg:text-xl text-base text-white w-[400px]  lg:w-[700px] leading-relaxed"
                        >
                            Hi, I am SK Pathim Hossain, a passionate and dedicated web developer
                            specializing in React, JavaScript, and MongoDB. With a knack for creating
                            dynamic, responsive, and user-friendly web applications. My expertise
                            spans front-end and back-end development, allowing me to build
                            seamless and efficient web experiences.
                        </motion.p>

                        {/* 🔥 BUTTON + ICONS */}
                        <div className="flex mt-[30px] items-center">

                            {/* DOWNLOAD BUTTON */}
                            <div>
                                <a href="https://drive.google.com/file/d/1JyAL1ikqWFkgd_2MCbEGPI8Nm5kGtUWx/view?usp=drivesdk" download>
                                    <button className="flex items-center gap-2 border border-white text-white text-lg px-5 py-2 rounded-full transition duration-300 hover:bg-white hover:text-indigo-600 hover:scale-105 shadow-lg">
                                        Download CV <FiDownload />
                                    </button>
                                </a>
                            </div>

                            {/* SOCIAL ICONS */}
                            <div className="flex gap-5 ml-5">

                                <a href="https://github.com">
                                    <FaGithub className="w-[45px] h-[45px] text-white transition duration-300 hover:scale-125 hover:text-black hover:bg-white p-2 rounded-full" />
                                </a>

                                <a href="https://www.facebook.com/share/1ApJdoR9pj/">
                                    <ImFacebook2 className="w-[45px] h-[45px] text-white transition duration-300 hover:scale-125 hover:bg-blue-600 p-2 rounded-full" />
                                </a>

                                <a href="https://www.linkedin.com/">
                                    <ImLinkedin className="w-[45px] h-[45px] text-white transition duration-300 hover:scale-125 hover:bg-blue-800 p-2 rounded-full" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* 🔥 RIGHT IMAGE */}
                    <div className="lg:mt-[220px] mt-[50px] lg:ml-[130px] ml-[15px]">

                        <motion.img
                            src="https://i.ibb.co/sv8fSMRF/IMG-4572.jpg"
                            alt=""
                            className="rounded-2xl lg:h-[450px] lg:w-[350px] sm:h-[300px] w-[400px] shadow-2xl border-4 border-white/20"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                    </div>
                </div>
            </motion.div>

            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;