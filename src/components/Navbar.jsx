import { navLinks } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar= ()=>{
    useGSAP(()=>{
        const navTween= gsap.timeline({
            scrollTrigger:{
                trigger: "nav",
                start: "top 50%"
            }
        })

        navTween.fromTo("nav",{
            backgroundColor: "white",
        }, {
            backgroundColor: "#FFFFFF50",
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: "power1.inOut"
        }
    )})

    return(
        <nav>
            <div>
                <a href="#home">
                    <p>Fashion</p>
                </a>

                <ul>
                    {navLinks.map((link)=>(
                        <li>
                            <a href={`#${ link.id }`}>{ link.title }</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar