import { GiGraduateCap } from "react-icons/gi";
import { motion } from "framer-motion";

const About = () => {
    const skills = [
        { name: "HTML", src: "https://i.ibb.co/GHDn9wY/HTML.png" },
        { name: "CSS", src: "https://i.ibb.co/4YFH8rz/css.png" },
        { name: "JavaScript", src: "https://i.ibb.co/kxVpg7V/Java-Script.png" },
        { name: "React", src: "https://i.ibb.co/bKp9mFP/react.png" },
        { name: "Tailwind", src: "https://i.ibb.co/h8xTh68/tailwind.png" },
        { name: "Firebase", src: "https://i.ibb.co/s5Hh81r/firebase.png" },
        { name: "Node.js", src: "https://i.ibb.co/ZWz3SHr/node.png" },
        { name: "Express", src: "https://i.ibb.co/tYfnKcB/express.png" },
        { name: "MongoDB", src: "https://i.ibb.co/xSGpYQZ/mongo.png" },
    ];

    return (
        <div className="bg-gradient-to-b from-indigo-50 to-white lg:py-20 py-10">

            {/* Intro */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center px-4"
            >
                <h3 className="lg:text-4xl text-3xl text-indigo-600 lg:font-semibold font-bold mb-2">About Me</h3>
                <h2 className="lg:text-5xl text-4xl text-center text-blue-500 font-bold mb-5">Welcome To My Portfolio</h2>
                <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
                    Hi! I’m SK Pathim Hossain, a passionate web developer from Khulna.
                    I specialize in building modern, responsive web applications with React,
                    JavaScript, Node.js, and MongoDB. I enjoy solving problems and bringing
                    ideas to life on the web. I’ve completed 20+ projects and am always
                    excited to learn new technologies.
                </p>
            </motion.div>

            {/* Skills Section */}
            <div className="mt-16 text-center">
                <h1 className="text-4xl text-purple-600 font-bold mb-5">My Skills</h1>
                <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                    Technologies I work with daily:
                </p>

                {/* 🔹 Bulletin Scroll Container */}
                <div className="w-[1000px] mx-auto overflow-hidden  rounded-xl">
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {/* Duplicate skills for endless scroll */}
                        {skills.concat(skills).map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-white shadow-md rounded-xl p-3 w-[100px] hover:scale-110 transition duration-300"
                            >
                                <img src={skill.src} alt={skill.name} className="w-16 h-16 mb-2" />
                                <span className="text-sm font-semibold text-gray-700 text-center">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Education */}
            <div className="mt-20 flex flex-col items-center">
                <div className="flex items-center mb-5">
                    <GiGraduateCap className="text-5xl text-indigo-500 mr-4" />
                    <h2 className="text-4xl font-semibold text-indigo-500">My Education</h2>
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-500 to-indigo-500 lg:w-[600px] w-full   shadow-2xl rounded-2xl backdrop-blur-lg border border-white/20 p-8 text-white"
                >
                    <h3 className="text-xl font-bold text-blue-200 mb-2">2023 - Present</h3>
                    <h2 className="lg:text-2xl text-base lg:font-semibold font-medium mb-1">
                        B.Sc. in Computer Science and Engineering
                    </h2>
                    <p className="text-gray-100">
                        Northern University of Business and Technology, Khulna
                    </p>
                </motion.div>
            </div>

        </div>
    );
};

export default About;