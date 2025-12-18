const Home= ()=>{
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
                    
                <p id="mini-text">Lorem ipsum sit amet elit.</p>

                <h2 id="bottom-left">Let’s explore<br/>unique clothes</h2>
                <p id="bottom-right">Sit amet adipiscing quisque faucibus ex.<br/>Adipiscing elit quisque faucibus ex sapien<br/>vitae pellentesque.</p>
            </div>            
        </section>
    )
}

export default Home