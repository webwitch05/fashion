import { reviewsList } from "../../constants"

const Reviews= ()=>{
    return(
        <section id="reviews" className="bg-yellow">
            <div className="px-6 py-16">
                <div className="flex-center flex-col md:flex-row gap-10">
                    {reviewsList.map((person)=>(
                        <div 
                            key= { person.name }
                            className="flex flex-col justify-between bg-white rounded-xl p-8 p-4"
                        >

                            <p className="text-lg md:text-xl mb-8 leading-snug font-semibold">"{ person.review }"</p>

                            <div className="flex flex-row items-center gap-4">
                                <img 
                                    src={ person.profile } 
                                    className="w-15 h-15 rounded-full object-cover"
                                />
                                <div className="leading-tight">
                                    <p className="font-bold text-base">{ person.name }</p>
                                    <p className="font-light text-sm">{ person.rating }</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews