const Download= ()=>{
    return(
        <>
            <div className="flex justify-between items-center m-20 md:m-40">
                <div className="flex flex-col text-left gap-5">
                    <h1 className="font-abril-fatface font-black text-2xl md:text-5xl tracking-tighter">
                        DOWNLOAD APP<br/>TO GET THE VOUCHER!
                    </h1>
                    <p className="text-sm md:text-base tracking-tighter">Sit amet adipiscing quisque faucibus ex. Adipiscing elit<br/>quisque faucibus ex sapien vitae pellentesque.</p>
                    <img src="images/download-apple-google.png" className="w-[60%]"/>
                </div>
                <div className="relative flex-center w-[80%] md:w-[60%]">
                    <img 
                        src="images/download-app.png" 
                        className="relative w-[70%]"
                    />
                    <img 
                        src="images/download-background.png" 
                        className="absolute inset-0 w-full h-full object-contain z-[-1]"
                    />
                </div>
            </div>
        </>
    )
}

export default Download