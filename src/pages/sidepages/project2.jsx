
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pristine from "../../assets/pristine.png";
import { Hovervideo } from "../../components/ui/hovervideo";
const Project2 = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-around items-center mt-10">
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <div className="flex flex-row gap-3">
                        <motion.button
                            initial={{ opacity: 0, x: -30, y: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            onClick={() => navigate("/projects")}
                            className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-white/25 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Back</motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: -30, y: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            onClick={() => navigate("/projects/pj1")}
                            className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-white/25 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Prev</motion.button>

                    </div></div>
                <div className="flex flex-row">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-4xl  max-md:text-3xl font-extrabold">Pri
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-blue-600 text-4xl  max-md:text-3xl font-extrabold">stine</motion.h1>
                </div>
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: 30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/projects/pj3")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Next Project</motion.button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}

                className="flex justify-around items-center mt-25 gap-10 max-md:justify-center max-md:items-center max-md:flex-col">
                <Hovervideo
                    img={pristine}
                    video=""
                />
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30, scale: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="flex flex-col gap-2 max-md:ml-15 max-md:text-start">
                    <h1 className="text-white text-4xl  max-md:text-2xl max-md:mr-15 font-extrabold max-md:text-center">Pristine</h1>
                    <p className="text-white ">Pristine provide the end-to-end chat,todolist and humanize-text conversion with <span className="text-blue-600 font-extrabold">API.</span></p>
                    <ul className="list-inside list-disc">
                        <li className="text-white">Will Be Coming Soon On <span className="text-green-600 font-extrabold">2026.</span></li>
                    </ul>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Project2;