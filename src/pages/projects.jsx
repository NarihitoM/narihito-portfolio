

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import malanai from '../assets/malan-ai.png'
import waifu from "../assets/waifugallery.png";
import pristine from "../assets/pristine.png";
import { Card, CardTitle, CardAction, CardDescription, CardHeader, CardFooter } from "../components/ui/card";
const Projects = () => {

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
                        onClick={() => navigate("/about")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-white/25 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Go Back</motion.button>
                </div>
                <div className="flex flex-row">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-4xl  max-md:text-3xl font-extrabold">Pro
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-blue-600 text-4xl  max-md:text-3xl font-extrabold">jects</motion.h1>
                </div>
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: 30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/game")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Continue</motion.button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 20 }}
                exit={{ opacity: 0, y: 0, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-15 flex flex-wrap gap-3 justify-center items-center">
                <Card className="p-6 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 
                shadow-[0_0_20px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                hover:scale-[1.02] transition-all duration-300 w-80 max-md:w-65">
                    <div className="w-full h-50 overflow-hidden rounded-xl mb-4">
                        <img
                            src={malanai}
                            className="w-full h-full object-cover rounded-xl hover:scale-110 transition-all duration-500"
                        />
                    </div>
                    <CardTitle className="text-2xl text-blue-600 font-extrabold mb-2">
                        Malan-Ai
                    </CardTitle>
                    <CardDescription className="text-white/80 mb-4 flex flex-col gap-4">
                        <p>A collaborative chatbot project by Narihito and Riae and offering <span className="text-blue-600 font-extrabold">files</span> and <span className="text-blue-600 font-extrabold">messages</span><span className="text-2xl text-green-600 font-bold">(Online)</span></p>
                        <button onClick={() => navigate("/projects/pj1")} className="h-10 w-50 self-center  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1 shadow-[0_0_10px_0_blue,0_0_20px_0_blue]">View Details</button>
                    </CardDescription>
                </Card>
                <Card className="p-6 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 
                shadow-[0_0_20px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                hover:scale-[1.02] transition-all duration-300 w-80 max-md:w-65">
                    <div className="w-full h-50 overflow-hidden rounded-xl mb-4 flex flex-col gap-4">
                        <img
                            src={pristine}
                            className="w-full h-full object-cover rounded-xl hover:scale-110 transition-all duration-500"
                        />
                    </div>
                    <CardTitle className="text-2xl text-blue-600 font-extrabold mb-2">
                        Pristine
                    </CardTitle>
                    <CardDescription className="text-white/80 mb-4 flex flex-col gap-4">
                        <p>A Website Solely Purpose For Humanize Text With <span className="text-blue-600 font-extrabold">Integrated Ai </span> <span className="text-blue-600 font-extrabold">chatbot</span> with<span className="text-blue-600 font-extrabold"> todolist.</span> Developed By Narihito.<span className="text-2xl text-red-600 font-bold">(Coming Soon)</span></p>
                        <button onClick={() => navigate("/projects/pj2")} className="h-10 w-full self-center backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1 shadow-[0_0_10px_0_blue,0_0_20px_0_blue]">View Details</button>
                    </CardDescription>
                </Card>

                <Card className="p-6 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 
                shadow-[0_0_20px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                hover:scale-[1.02] transition-all duration-300 w-80 max-md:w-65">
                    <div className="w-full h-50 overflow-hidden rounded-xl mb-4">
                        <img
                            src={waifu}
                            className="w-full h-full object-cover rounded-xl hover:scale-110 transition-all duration-500"
                        />
                    </div>
                    <CardTitle className="text-2xl text-blue-600 font-extrabold mb-2">
                        Waifu-Gallery
                    </CardTitle>
                    <CardDescription className="text-white/80 mb-4 flex flex-col gap-4">
                 <p>A gallery fill with all the waifus from <span className="text-blue-600 font-extrabold">Anime</span>,<span className="text-blue-600  font-extrabold">Game </span>and <span className="text-blue-600 font-extrabold">Manga/Manhwa/Manhua.</span> Developed by Narihito.<span className="text-2xl text-green-600 font-bold">(Online)</span></p>
                        <button onClick={() => navigate("/projects/pj3")} className="h-10 w-50 self-center  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1 shadow-[0_0_10px_0_blue,0_0_20px_0_blue]">View Details</button>
                    </CardDescription>
                </Card>
            </motion.div>
        </>
    )
}
export default Projects;