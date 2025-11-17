import "../index.css";
import userpf from "../assets/pf.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Renderpage = ({ children }) => {
    const navigate = useNavigate();
    const [onclick, setclick] = useState(false);
    const area = useRef(null);

    const handle = () => {
        setclick((prev) => !prev);
    }
    useEffect(() => {
        let clickoutside = (e) => {
            if (area.current && !area.current.contains(e.target)) {
                setclick(false);
            }
        }
        let onscroll = (e) => {
            setclick(false);
        }
        document.addEventListener("mousedown", clickoutside);
        window.addEventListener("scroll", onscroll);
        return () => {
            document.removeEventListener("mousedown", clickoutside);
            window.removeEventListener("scroll", onscroll);
        }
    });

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <header className="flex justify-between items-center p-6">
                    <div className="ml-4 flex flex-row justify-center items-center">
                        <h1 className="text-white text-3xl font-extrabold"><span className="text-blue-600">N</span>arihito</h1>
                    </div>
                    <div className="mr-4">
                        <ul className="flex flex-row gap-5 max-md:hidden">
                            <NavLink to="/home" className={({ isActive }) =>
                                `cursor-pointer pb-1 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-white"
                                }`
                            }>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) =>
                                `cursor-pointer pb-1 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-white"
                                }`
                            }>About</NavLink>
                            <NavLink to="/projects" className={({ isActive }) =>
                                `cursor-pointer pb-1 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-white"
                                }`
                            }>Projects</NavLink>
                            <NavLink to="/game" className={({ isActive }) =>
                                `cursor-pointer pb-1 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-white"
                                }`
                            }>Games</NavLink>
                            <NavLink to="/contact" className={({ isActive }) =>
                                `cursor-pointer pb-1 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-white"
                                }`
                            }>Contact</NavLink>
                        </ul>
                        <button onClick={handle} className="text-white md:hidden">
                            {onclick ? <X size={28} /> : <Menu size={28} />}
                        </button>
                        <AnimatePresence>
                            {onclick && (
                                <motion.div
                                    ref={area}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-22 z-10 right-0 bg-white/20 backdrop-blur-xl border border-white/30 
                       shadow-xl rounded-2xl p-4 flex flex-col gap-4 md:hidden"
                                >
                                    <NavLink to="/home" className={({ isActive }) =>
                                        `cursor-pointer pb-1 ${isActive ? "text-blue-500 " : "text-white"
                                        }`
                                    }>Home</NavLink>
                                    <NavLink to="/about" className={({ isActive }) =>
                                        `cursor-pointer pb-1 ${isActive ? "text-blue-500 " : "text-white"
                                        }`
                                    }>About</NavLink>
                                    <NavLink to="/projects" className={({ isActive }) =>
                                        `cursor-pointer pb-1 ${isActive ? "text-blue-500 " : "text-white"
                                        }`
                                    }>Projects</NavLink>
                                    <NavLink to="/game" className={({ isActive }) =>
                                        `cursor-pointer pb-1 ${isActive ? "text-blue-500 " : "text-white"
                                        }`
                                    }>Games</NavLink>
                                    <NavLink to="/contact" className={({ isActive }) =>
                                        `cursor-pointer pb-1 ${isActive ? "text-blue-500" : "text-white"
                                        }`
                                    }>Contact</NavLink>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </header>
                <hr className="w-full h-0 bg-white" />
                <div className="pb-20 grow">
                    {children}
                </div>
                <hr className="bg-white w-full" />
                <footer className="p-10">
                    <div className="flex justify-between max-md:hidden">
                        <div className="flex flex-row gap-2.5 max-md:gap-1 max-md:flex-col max-md:ml-1 ml-4">
                            <a href="https://github.com/NarihitoM"><i className="fa-brands fa-github text-white text-3xl max-md:text-xl"></i>     </a>
                            <a href="https://www.youtube.com/@notnarihito2902"><i className="fa-brands fa-youtube text-white text-3xl max-md:text-xl"></i></a>
                            <a href="https://www.facebook.com/share/17tDhQWvBw/"><i className="fa-brands fa-facebook text-white text-3xl max-md:text-xl"></i></a>
                        </div>
                        <div className="flex justify-center items-center">
                            <p
                                className="text-white font-bold">©2025 <span className="text-blue-600">Narihito. </span>All Rights Reserved.</p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-1.5 justify-center items-center md:hidden">
                        <div className="flex flex-row gap-2">
                            <a href="https://github.com/NarihitoM"><i className="fa-brands fa-github text-white text-3xl max-md:text-xl"></i>     </a>
                            <a href="https://www.youtube.com/@notnarihito2902"><i className="fa-brands fa-youtube text-white text-3xl max-md:text-xl"></i></a>
                            <a href="https://www.facebook.com/share/17tDhQWvBw/"><i className="fa-brands fa-facebook text-white text-3xl max-md:text-xl"></i></a>
                        </div>
                        <div className="flex flex-row">
                            <p
                                className="text-white font-bold">©2025 <span className="text-blue-600">Narihito. </span>All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Renderpage;