import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const Home= ()=>{
    useGSAP(()=>{
        const titleSplit= new SplitText(".title", {type: "chars"});
        const paraSplit= new SplitText(".para", { type:"lines" });

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.06,
            duration: 1.6,
            ease: "expo.out"
        })

        gsap.from(paraSplit.lines,{
            opacity: 0,
            yPercent: 100,
            duration: 2.0,
            ease: "expo.out",
            stagger: 0.1,
            delay: 1,
        })

        gsap.timeline({
            scrollTrigger:{
                trigger: "#home",
                start: "top top",
                end: "bottom 85%",
                scrub: true
            }
        })
            .fromTo("#home-human", {
                yPercent: 100,
                opacity: 0
            },{
                yPercent: 0,
                opacity: 1,
                ease: "power1.inOut"
            })
    })

    return(
        <section id="home">
            <div id="home-container">
                <div id="home-box">
                    <img id="home-background" src="images/home-background.png"/>
                    <img id="home-human" src="images/home-human.png"/>
                </div>

                <div className="title">
                    <span className="front">Web</span>
                    <span className="back">Witch</span>
                </div>
                    
                <p id="mini-text" className="para">Lorem ipsum sit amet elit.</p>

                <h2 id="bottom-left" className="para">Let’s explore<br/>unique clothes</h2>
                <p id="bottom-right" className="para">Sit amet adipiscing quisque faucibus ex.<br/>Adipiscing elit quisque faucibus ex sapien<br/>vitae pellentesque.</p>
            </div>            
        </section>
    )
}

export default Home