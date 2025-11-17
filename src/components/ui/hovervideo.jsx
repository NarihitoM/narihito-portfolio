import { useEffect, useRef, useState } from "react";

function Hovervideo({img,video})
{
    const [image,setimage] = useState(true);
    const [videoplay,setvideoplay] = useState(true);
    const hover = useRef(null);
    const videoref = useRef(null);
    
    useEffect(() =>
    {
        const handlevideo = (e) =>
        {
            if(!hover.current) return;
            if(hover.current && hover.current.contains(e.target))
            {
            setimage(false);
            setvideoplay(true);
            videoref.current.play();
            }
            else
            {
            setimage(true);
            setvideoplay(false);
            videoref.current.pause();
            videoref.current.currentTime = 0;
            }
        }
        window.addEventListener("mousemove",handlevideo);
        window.addEventListener("click",handlevideo)
        return () => 
            {
                window.removeEventListener("mousemove",handlevideo);
                window.removeEventListener("click",handlevideo);
            }
    },[image,hover,videoref,videoplay]);

    return (
    <div ref={hover} 
        className="w-100 h-60 relative overflow-hidden rounded-xl ml-20 bg-center transition-all duration-500 max-md:ml-0 max-md:w-85 max-md:h-60 hover:shadow-[0_0_10px_0_blue,0_0_20px_0_blue]">
        {image &&
          <img src={img} className={`w-100 h-60 object-cover absolute top-0 left-0 hover:w-100 transition-all duration-500 bg-center ${videoplay ? "opacity-0" : "opacity-100"}`}></img>
        }
        <video src={video} muted ref={videoref} className={`absolute object-cover top-0 left-0 transition-all duration-500 hover:w-100 bg-center w-100 h-60  ${image ? "opacity-0" : "opacity-100"}`}>
        </video>
     </div>
    )
}

export {Hovervideo}