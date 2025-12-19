import { contactsDict, socialmedia } from "../../constants"

const Contact= ()=>{
    return (
        <>
            <div className="bg-[#313131] p-20 flex justify-between items-center">
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl uppercase text-white">Fashion</h1>
                    <p className="text-[#8E8E8E] text-sm leading-snug">Complete your style with awesome<br/>clothes from us.</p>

                    <div className="flex items-center gap-3">
                        {socialmedia.map((media)=>{
                            const Icon= media.icon;

                            return(
                                <a 
                                    href= { media.link }
                                    className="bg-yellow w-10 h-10 rounded-md flex-center"
                                >
                                    <Icon className="text-lg"/>
                                </a>
                            )

                        })}
                    </div>
                </div>

                <div className="flex flex-row gap-12">
                    {contactsDict.map((contact)=>(
                        <div className="flex flex-col gap-5">
                            <p className="contact-title text-white">{ contact.title }</p>

                            <div className="flex flex-col gap-4">
                                { contact.subtitles.map((sub)=>(
                                    <a 
                                        href={ sub.link } 
                                        className="contact-subtitle text-[#8E8E8E]"
                                    > 
                                        { sub.name }
                                    </a>
                                )) }
                            </div>
                        </div>                            
                    ))}
                </div>
            </div>
        </> 
    )
}

export default Contact