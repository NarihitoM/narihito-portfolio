
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Hovervideo } from "../../components/ui/hovervideo";
import malanchat from "../../assets/malanchat.png";
import malanchatvideo from "../../assets/Malanaichat.mp4";
import malanfile from "../../assets/malanfileread.png";
import malanfilevideo from "../../assets/malanfileread.mp4";
import malanfilecreate from "../../assets/malancfilecreate.png";
import malanfilecreatevideo from "../../assets/malancreatefile.mp4";
const Project1 = () => {
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
                            onClick={() => navigate("/projects/pj4")}
                            className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-white/25 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Prev</motion.button>

                    </div>
                </div>
                <div className="flex flex-row">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-4xl  max-md:text-3xl font-extrabold">MaLan
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-blue-600 text-4xl  max-md:text-3xl font-extrabold">Ai</motion.h1>
                </div>
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: 30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/projects/pj2")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Next</motion.button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}

                className="flex justify-around items-center mt-25 gap-10 max-md:justify-center max-md:items-center max-md:flex-col">
                <Hovervideo
                    img={malanchat}
                    video={malanchatvideo}
                />
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30, scale: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="flex flex-col gap-2 max-md:ml-15 max-md:text-start">
                    <h1 className="text-white text-4xl  max-md:text-2xl max-md:mr-15 font-extrabold max-md:text-center">MalanAi<span className="text-blue-600">(Chat)</span></h1>
                    <p className="text-white ">Malan-Ai provide the end-to-end chat with <span className="text-blue-600 font-extrabold">API.</span></p>
                    <ul className="list-inside list-disc">
                        <li className="text-white">Free.</li>
                        <li className="text-white">Better Performance.</li>
                    </ul>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}

                className="flex justify-evenly items-center mt-25 gap-10 max-md:justify-center max-md:items-center max-md:flex-col">

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30, scale: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="flex flex-col gap-2 max-md:ml-15 max-md:text-start text-end">
                    <h1 className="text-white text-4xl  max-md:text-2xl max-md:mr-15 font-extrabold max-md:text-center">MalanAi<span className="text-blue-600">(FileRead)</span></h1>
                    <p className="text-white ">Malan-Ai provide the file reading capability with <span className="text-blue-600 font-extrabold">API.</span></p>
                    <ul className="list-inside list-disc">
                        <li className="text-white">Can read file.</li>
                        <li className="text-white">Can give suggestions.</li>
                    </ul>
                </motion.div>
                <Hovervideo
                    img={malanfile}
                    video={malanfilevideo}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}

                className="flex justify-around items-center mt-25 gap-10 max-md:justify-center max-md:items-center max-md:flex-col">
                <Hovervideo
                    img={malanfilecreate}
                    video={malanfilecreatevideo}
                />
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30, scale: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="flex flex-col gap-2 max-md:ml-15 max-md:text-start">
                    <h1 className="text-white text-4xl  max-md:text-2xl max-md:mr-15 font-extrabold max-md:text-center">MalanAi<span className="text-blue-600">(FileCreate)</span></h1>
                    <p className="text-white ">Malan-Ai provide creating the file for users to download and read with <span className="text-blue-600 font-extrabold">API.</span></p>
                    <ul className="list-inside list-disc">
                        <li className="text-white">Free.</li>
                        <li className="text-white">Better Performance.</li>
                    </ul>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}

                className="flex justify-center items-center mt-20">
                <a className="bg-blue-600 px-5 py-1.5 rounded-lg font-bold active:translate-y-1 text-white" href="https://narihitom.github.io/malanai/">Go</a>
            </motion.div>
        </>
    )
}

export default Project1;