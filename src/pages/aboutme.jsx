
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import user from "../assets/mypf.jpg";
import { useNavigate } from "react-router-dom";
const Aboutme = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-around items-center mt-10">
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: -30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/home")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-white/25 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Go Back</motion.button>
                </div>
                <div className="flex flex-row">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-4xl  max-md:text-3xl font-extrabold">About
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-blue-600 text-4xl  max-md:text-3xl font-extrabold">Me</motion.h1>
                </div>
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: 30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/projects")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Continue</motion.button>
                </div>
            </div>
            <div className="flex flex-row mt-20 justify-between max-md:justify-center max-md:flex-col  ">
                <div className="flex flex-col ml-30 max-md:justify-center max-md:items-center max-md:ml-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-white text-4xl max-md:text-3xl font-semibold">I'm Hein Htet Aung.
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-white text-4xl max-md:text-3xl font-semibold">Also known as{" "}<br/>
                        <span className="text-blue-600 font-bold max-md:flex max-md:justify-center max-md:items-center">
                            <Typewriter
                                words={["Narihito.", "Rico."]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            /></span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-white">
                        I'm currently studying computer science at<br />
                        <a href="https://www.uit.edu.mm" className="text-blue-600">University Of Information Technology.</a><br>
                        </br>
                        <span className="flex max-md:justify-center max-md:items-center">I'm Passionate Young Developer.</span>
                    </motion.p>
                    <div className="flex flex-row gap-3">
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                            className="w-10 h-10 flex justify-center items-center"><a href="https://github.com/NarihitoM"><i className="fa-brands fa-github text-3xl text-white rounded-full  hover:shadow-[0_0_10px_0_white,0_0_20px_0_white,0_0_30px_0_white] active:translate-y-1"></i></a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                            className="w-10 h-10 flex justify-center items-center"><a href="https://www.youtube.com/@notnarihito2902"><i className="fa-brands fa-youtube text-3xl text-red-600 rounded-full hover:shadow-[0_0_10px_0_red,0_0_20px_0_red,0_0_30px_0_red] active:translate-y-1"></i></a></motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
                            className="w-10 h-10 flex justify-center items-center"><a href="https://www.facebook.com/share/17tDhQWvBw/"><i className="fa-brands fa-facebook text-3xl text-blue-600 rounded-full hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] active:translate-y-1"></i></a></motion.div>
                    </div>
                </div>
                <div className="mr-30  max-md:mt-15 max-md:mr-0 max-md:flex max-md:justify-center max-md:items-center max-md:flex-col ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
                    >
                        <img src={user} className="h-50 w-50 max-md:h-30 max-md:w-30 rounded-full shadow-[0_0_10px_0_blue,0_0_20px_0_blue,0_0_30px_0_blue] hover:scale-110 hover:transition-all transition-all animate-pulse " />
                    </motion.div>
                </div>
            </div>
        </>
    )
}
export default Aboutme;