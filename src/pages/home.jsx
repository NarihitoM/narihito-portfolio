
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import user from "../assets/pf.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-row justify-between mt-25 max-md:mt-15 items-center max-md:justify-center max-md:items-center max-md:flex-col">
                <div className="ml-30 max-md:ml-0 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="text-blue-600 text-4xl  max-md:text-3xl font-extrabold">
                        <Typewriter
                            words={["Frontend", "Backend","Full-Stack"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        /><br/>
                        <span className="text-white">Developer.</span>
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        className="mt-5 text-white text-4xl max-md:text-2xl font-semibold">My <span className="text-blue-600 font-extrabold">Skills</span>
                    </motion.h1>
                    <div className="flex flex-col gap-3 ">
                        <div className="flex flex-row gap-4 max-md:justify-center max-md:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                            className="w-auto h-10 p-2 rounded-lg backdrop-blur-xl text-white bg-yellow-500 border border-r-white shadow-2xl flex justify-center items-center hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-3d">
                            Javascript
                        </motion.div>
                      
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                            className="w-auto h-10 p-2 rounded-lg backdrop-blur-xl text-white bg-cyan-600 border border-r-white shadow-2xl flex justify-center items-center hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-3d">
                                ReactJS
                        </motion.div>
                         <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                            className="w-auto h-10 p-2 rounded-lg backdrop-blur-xl text-white bg-green-500 border border-r-white shadow-2xl flex justify-center items-center hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-3d">
                                MongoDB
                        </motion.div>
                        </div>
                        <div className="flex flex-row gap-4 max-md:justify-center items-center">
                         <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                            className="w-auto h-10 p-2 rounded-lg backdrop-blur-xl text-white bg-yellow-500 border border-r-white shadow-2xl flex justify-center items-center hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-3d">
                            NodeJS
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
                            className="w-auto h-10 p-2 rounded-lg backdrop-blur-xl text-white bg-yellow-500 border border-r-white shadow-2xl flex justify-center items-center hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-3d">
                            ExpressJS
                        </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                            className="w-auto h-10 p-2 rounded-lg backdrop-blur-xl text-white bg-cyan-400 border border-r-white shadow-2xl flex justify-center items-center hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-3d">
                            TailwindCSS
                        </motion.div>
                        </div>
                        <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                            <motion.button 
                            initial={{ opacity: 0, x: -30,y:30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
                            onClick={() => navigate("/about")}
                            className="h-10 w-full backdrop-blur-2xl p-2 rounded-lg bg-blue-600  text-white hover:bg-gray-800 hover:text-white active:translate-y-1 shadow-[0_0_10px_0_blue,0_0_20px_0_blue]">Continue</motion.button>
                        </div>
                    </div>
                </div>
                <div className="mr-30  max-md:mt-20 max-md:mr-0 max-md:flex max-md:flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
                    >
                        <img src={user} className="h-50 w-50 max-md:h-30 max-md:w-30 rounded-full shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-110 animate-pulse transition-all" /><br/>
                        <p className="text-white text-4xl max-md:text-2xl font-semibold text-center">My <span className="text-blue-600 font-extrabold">Logo</span></p>
                    </motion.div>
                </div>
            </div>
        </>
    )

}

export default Home;