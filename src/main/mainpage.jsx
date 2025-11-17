import { useNavigate } from "react-router-dom";
import "../index.css"
import { animate, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import code from "../assets/code-alt.png";
import user from "../assets/user-circle.png"
import { useEffect, useState } from "react";
const Mainpage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {

        const gotonextpage = setTimeout(() => {
            navigate("/home");
        }, 4000);

        return () => {
            clearTimeout(gotonextpage);
        }
    }) 
    return (
        <>
            <div className="flex justify-center items-center h-svh w-full">
                <div className="flex flex-col justify-center items-center">
                    <AnimatePresence>
                        <motion.h1
                            initial={{ opacity: 0, y: 30, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl text-white ">Narihito's <span className="text-blue-600 ">Here.</span>
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 30, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-3xl text-white">Welcome To <span className="text-blue-600 ">My Portfolio!</span>
                        </motion.h1>
                       
                        <div className="flex flex-row justify-center gap-3">
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, y: 30 }}
                                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                                className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/25 border border-r-white shadow-2xl flex justify-center items-center"><img className="w-6 h-6 " src={code} />

                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, y: 30 }}
                                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                                className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/25 border border-r-white shadow-2xl flex justify-center items-center"><img className="w-6 h-6 " src={user} /></motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, y: 30 }}
                                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
                                className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/25 border border-r-white shadow-2xl flex justify-center items-center"><img className="w-6 h-6 " src={code} /></motion.div>
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}


export default Mainpage;