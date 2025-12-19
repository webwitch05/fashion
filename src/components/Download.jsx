import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Download= ()=>{

    useGSAP(()=>{
        const linesSplit= new SplitText("#download-text", {type: "lines"})

        const timeline= gsap.timeline({
            scrollTrigger:{
                trigger: "#download",
                start: "top 60%",
                end: "top 30%"
            }
        })
        timeline
        .from(linesSplit.lines, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "power1.inOut"
        })

        .from("#download-app", {
            yPercent: 100,
            opacity: 0,
            duration: 2,
            ease: "power1.inOut"
        })

        gsap.to("#download-app", {
            y: -20,
            duration: 1,
            repeat: -1,
            yoyo: true, 
            ease: "power1.inOut",
            delay: 2
        })        
    })

    return(
        <section id="download">
            <div className="flex justify-between items-center m-20 md:m-40">
                <div id="download-text" className="flex flex-col text-left gap-5">
                    <h1 className="font-abril-fatface font-black text-2xl md:text-5xl tracking-tighter">
                        DOWNLOAD APP<br/>TO GET THE VOUCHER!
                    </h1>
                    <p className="text-sm md:text-base tracking-tighter">Sit amet adipiscing quisque faucibus ex. Adipiscing elit<br/>quisque faucibus ex sapien vitae pellentesque.</p>
                    <img src="images/download-apple-google.png" className="w-[60%]"/>
                </div>
                <div className="relative flex-center w-[80%] md:w-[60%]">
                    <img 
                        id= "download-app"
                        src="images/download-app.png" 
                        className="relative w-[70%]"
                    />
                    <img 
                        src="images/download-background.png" 
                        className="absolute inset-0 w-full h-full object-contain z-[-1]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Download