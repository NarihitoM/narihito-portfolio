
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Hovervideo } from "../components/ui/hovervideo.jsx";
import genshin from "../assets/genshinimg.jpg";
import wuwa from "../assets/wutheringimg.jpg"
import video from "../assets/Genshin.mp4";
import wuwavideo from "../assets/wuwa.mp4"
const Game = () => {
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
                        onClick={() => navigate("/projects")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-white/25 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Go Back</motion.button>
                </div>
                <div className="flex flex-row">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-4xl  max-md:text-3xl font-extrabold">Ga
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-blue-600 text-4xl  max-md:text-3xl font-extrabold">mes</motion.h1>
                </div>
                 <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: 30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/contact")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Continue</motion.button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="flex justify-around items-center mt-25 gap-10 max-md:justify-center max-md:items-center max-md:flex-col">
                <Hovervideo
                    img={genshin}
                    video={video}
                />
                <div className="flex flex-col gap-2 max-md:ml-15 max-md:text-start">
                    <h1 className="text-white text-4xl  max-md:text-2xl font-bold">Genshin Impact</h1>
                    <p className="text-white ">A Open World Fantasy RPG Game Developed By <span className="text-blue-600 font-extrabold">Hoyoverse.</span></p>
                    <ul className="text-white list-disc list-inside">
                        <li >Free To Play</li>
                        <li >Addicting Exploration.</li>
                        <li >Beautiful Anime World</li>
                        <li >Great Music</li>
                        <li >Beautiful Character And Animation</li>
                    </ul>
                    <h1 className="text-white">My Uid-(<span className="text-blue-600">823259691 SEA</span>)</h1>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="flex justify-around items-center mt-25 gap-10 max-md:justify-center max-md:items-center max-md:flex-col">
                <Hovervideo
                    img={wuwa}
                    video={wuwavideo}
                />
                <div className="flex flex-col gap-2 max-md:ml-15 max-md:text-start">
                    <h1 className="text-white text-4xl max-md:text-2xl font-bold">Wuthering Waves</h1>
                    <p className="text-white ">A Open World Action RPG Game Developed By <span className="text-blue-600 font-extrabold">Kuro Games.</span></p>
                    <ul className="text-white list-inside list-disc">
                        <li>Free To Play</li>
                        <li>Amazing Fast-paced Combat</li>
                        <li>Great Graphics</li>
                        <li>Beautiful Character And Animation</li>
                    </ul>
                    <h1 className="text-white">My Uid-(<span className="text-blue-600">900395133 SEA</span>)</h1>

                </div>
            </motion.div>
        </>
    )
}

export default Game;