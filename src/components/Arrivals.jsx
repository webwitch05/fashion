import { arrivalsList } from "../../constants"
import { FaArrowRightLong } from "react-icons/fa6";

const Arrivals= ()=>{
 return(
    <section id= "arrivals">
        <div className="m-20">
            <div className="relative inline-block mb-10">
                <h1 className="font-poppins font-black text-5xl md:text-6xl tracking-tighter uppercase z-[10]">New Arrivals</h1>
                <img 
                    src="images/arrivals-leaf.png"
                    className="absolute left-[35%] z-[-1] w-[70%] bottom-[0.1rem]"
                />
            </div>

            <div className="flex justify-between flex-col md:flex-row gap-10">
                {arrivalsList.map((arrival)=>(
                    <div className="flex flex-start flex-col">
                        <img src={arrival.image}/>

                        <div className="flex justify-between items-center mt-3">
                            <h2 className="font-poppins font-semibold text-lg md:text-xl">{ arrival.category }</h2>
                            <FaArrowRightLong className="text-[#7F7F7F]"/>
                        </div>

                        <p className="text-[#7F7F7F]">Explore Now!</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
 )
}

export default Arrivals