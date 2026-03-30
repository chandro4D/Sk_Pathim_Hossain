import { motion } from "framer-motion";

const Projects = () => {
    const projectList = [
        {
            title: "MediStore",
            desc: "A responsive medicine e-commerce platform with user-friendly dashboards and product search. Includes a secure payment system.",
            tools: [
                { name: "React", src: "https://i.ibb.co/bKp9mFP/react.png" },
                { name: "Firebase", src: "https://i.ibb.co/s5Hh81r/firebase.png" },
                { name: "MongoDB", src: "https://i.ibb.co/xSGpYQZ/mongo.png" },
                { name: "Tailwind", src: "https://i.ibb.co/h8xTh68/tailwind.png" },
            ],
            bg: "bg-gradient-to-r from-purple-500 to-indigo-500",
        },
        {
            title: "AltFinder",
            desc: "A product comparison website to find alternatives and make better choices. Built with modern front-end and back-end tech.",
            tools: [
                { name: "React", src: "https://i.ibb.co/bKp9mFP/react.png" },
                { name: "Firebase", src: "https://i.ibb.co/s5Hh81r/firebase.png" },
                { name: "Node.js", src: "https://i.ibb.co/ZWz3SHr/node.png" },
                { name: "MongoDB", src: "https://i.ibb.co/xSGpYQZ/mongo.png" },
            ],
            bg: "bg-gradient-to-r from-sky-400 to-blue-600",
        },
        {
            title: "TourEase",
            desc: "A tourism website where users can explore famous tourist spots and add new places. Modern UI/UX with responsive design.",
            tools: [
                { name: "React", src: "https://i.ibb.co/bKp9mFP/react.png" },
                { name: "Firebase", src: "https://i.ibb.co/s5Hh81r/firebase.png" },
                { name: "Tailwind", src: "https://i.ibb.co/h8xTh68/tailwind.png" },
                { name: "MongoDB", src: "https://i.ibb.co/xSGpYQZ/mongo.png" },
            ],
            bg: "bg-gradient-to-r from-pink-500 to-indigo-500",
        },
    ];

    return (
        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 lg:h-[650px] py-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="lg:pt-20 pt-5 text-white lg:text-5xl text-3xl font-bold text-center">
                    My Latest Projects
                </h1>
            </motion.div>

            {/* Project Cards */}
            <div className="lg:flex lg:mt-[80px] mt-[40px] lg:mb-[100px] mb-[30px] flex-wrap justify-center gap-5 lg:ml-0 ml-[30px]">
                {projectList.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className={`card ${project.bg} lg:mb-0 mb-[30px] text-white w-96 shadow-2xl rounded-2xl cursor-pointer p-6 transition-transform duration-300`}
                    >
                        {/* Project Title & Description */}
                        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                        <p className="text-white text-sm mb-5">{project.desc}</p>

                        {/* Tech Logos */}
                        <div className="grid grid-cols-4 gap-3">
                            {project.tools.map((tool, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col items-center bg-white rounded-lg p-2"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img src={tool.src} alt={tool.name} className="w-12 h-12 mb-1" />
                                    <span className="text-xs text-gray-700 text-center">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;