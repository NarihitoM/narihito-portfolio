import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Contact = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [text, settext] = useState("");
    const [bool, setbool] = useState(false);
    const writing = useRef(null);
    const [submiterror, setsubmiterror] = useState();
    const [submitsuccess, setsubmitsuccess] = useState();
    const [message, setmessage] = useState("");
    const [errmessage, seterrmessage] = useState("");

    useEffect(() => {
        const handleclick = (e) => {
            if (writing.current && writing.current.contains(e.target)) {
                setbool(true);
            }
            else {
                setbool(false);
            }
        }
        document.addEventListener("mousedown", handleclick);
        return () => document.removeEventListener("mousedown", handleclick);
    }, []);

    async function onSubmit(e) {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!username) {
            setsubmiterror(true);
            seterrmessage("Please Enter User Name.");
        }
        else if (!emailRegex.test(email)) {
            setsubmiterror(true);
            setemail("")
            seterrmessage("Please Enter Correct Email.");
        }
        else if (!text) {
            setsubmiterror(true);
            seterrmessage("Please Enter Texts");
        }
        else {
            setsubmiterror(false);
            seterrmessage("Sending...")
            try {
                const response = await axios.post("https://portfolio-message-f9je.vercel.app/api/senduser", {
                    email: email,
                    user: username,
                    text: text,
                });
                if (response.data && response.data.success) {
                    setsubmitsuccess(true);
                    setsubmiterror(false);
                    seterrmessage(false);
                    setusername("");
                    setemail("");
                    settext("");
                    setmessage(response.data.message);
                    setTimeout(() => {
                        setsubmitsuccess(false);
                    }, 3000);
                }
            }
            catch (err) {
                setsubmiterror(true);
                seterrmessage(err.response?.data?.message || "Unexpected Error");
            }
        }
    }
    return (
        <>
            <div className="flex justify-around items-center mt-10">
                <div className="flex flex-row max-md:justify-center gap-3 max-md:flex-col max-md:items-center">
                    <motion.button
                        initial={{ opacity: 0, x: -30, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -30, scale: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => navigate("/game")}
                        className="h-10 w-full  backdrop-blur-2xl p-2 rounded-lg bg-white/25 text-white hover:bg-gray-800 hover:text-white active:translate-y-1">Go Back</motion.button>
                </div>
                <div className="flex flex-row">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-4xl  max-md:text-3xl font-extrabold">Con
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-blue-600 text-4xl  max-md:text-3xl font-extrabold">tact</motion.h1>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-20 flex justify-center items-center">
                <form onSubmit={onSubmit} ref={writing} className={`p-20 max-md:p-5 bg-white/25 rounded-2xl flex flex-col gap-3 hover:scale-105 hover:transition-all transition-all hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue] ${bool ? "scale-105 shadow-[0_0_10px_0_blue,0_0_20px_0_blue]" : ""}`}>
                    <h1 className="text-center text-4xl max-md:text-3xl text-white  font-extrabold"><span className="text-blue-600">Get</span> In Touch</h1>
                    <div className="flex flex-col gap-5">
                        <input onClick={(e) => { if (e.key === 'Enter') onSubmit(); }} type="text" placeholder="Name" value={username} onChange={(e) => setusername(e.target.value)} className="px-4 py-2  placeholder-blue-600 placeholder:font-semibold bg-white rounded-2xl" />
                        <input onClick={(e) => { if (e.key === 'Enter') onSubmit(); }} type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} className="px-4 py-2 placeholder-blue-600 bg-white rounded-2xl placeholder:font-semibold" />
                        <textarea  name="message" value={text} onChange={(e) => settext(e.target.value)} className="bg-white p-2 placeholder-blue-600 placeholder:font-semibold resize-none [scrollbar-width:none] rounded-lg" rows="4" cols="30" placeholder="Enter your message here..."></textarea>
                        {submiterror ? <p className="text-red-700 font-extrabold">{errmessage}</p> : <p className="text-yellow-600 text-1xl font-extrabold">{errmessage}</p>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-1 rounded-lg active:translate-y-1 hover:bg-black"
                    >
                        Send
                    </button>
                </form>
            </motion.div>
            {submitsuccess &&
                <div className="fixed top-0 left-0 p-5 rounded-lg bg-white shadow-[0_0_10px_0_blue,0_0_20px_0_blue]" >
                    <h1 className="text-green-600 font-bold">Sent Successfully!</h1>
                </div>}
        </>
    )
}

export default Contact;