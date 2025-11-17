
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Project4 = () =>
{
        const navigate = useNavigate();

     return(
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
                        className="text-white text-4xl  max-md:text-2xl font-extrabold">Coming
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-blue-600 text-4xl  max-md:text-2xl font-extrabold">Soon</motion.h1>
                </div>
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: 30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/projects/pj1")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-blue-600 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Next</motion.button>
                </div>
            </div>
            <div className="flex mt-20 justify-center items-center ">
                 <motion.p 
                 initial={{opacity:0,y:20}}
                 animate={{opacity:1,y:0}}
                 transition={{duration: 1,ease:"easeOut",delay:0.4}}
                 className="text-white font-extrabold text-5xl">Coming Soon</motion.p>
            </div>
            </>
    )
}

export default Project4;