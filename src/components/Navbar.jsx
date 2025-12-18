import { navLinks } from "../../constants"

const Navbar= ()=>{
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