import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const navLinks= [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "arrivals",
        title: "Arrivals"
    },    
    {
        id: "reviews",
        title: "Reviews"
    },    
];

const arrivalsList= [
    {
        category: "Hoodies & Sweatshirt",
        image: "images/arrivals-human01.jpg"
    },
    {
        category: "Coats & Parkas",
        image: "images/arrivals-human02.jpg"
    },
    {
        category: "Tees & T-Shirt",
        image: "images/arrivals-human03.jpg"
    },        
];

const reviewsList= [
    {
        name: "Jane",
        rating: "5/5",
        profile: "images/reviews-person01.png",
        review: "Lorem ipsum dolor sit.",
    },
    {
        name: "Zac",
        rating: "4/5",
        profile: "images/reviews-person02.png",
        review: "Lorem ipsum dolor sit.",
    },
    {
        name: "Nadia",
        rating: "5/5",
        profile: "images/reviews-person03.png",
        review: "Lorem ipsum dolor sit.",
    },        
];

const socialmedia=[
    {
        name: "facebook",
        icon: FaFacebookF,
        link: "#",
    },
    {
        name: "instagram",
        icon: FaInstagram,
        link: "#",
    },
    {
        name: "twitter",
        icon: FaTwitter,
        link: "#",
    },
    {
        name: "linkedin",
        icon: FaLinkedinIn,
        link: "#",
    },            
];

const contactsDict=[
    {
        title: "Company",
        subtitles: [
            {
                name: "About",
                link: "#",
            },
            {
                name: "Contact us",
                link: "#",
            },
            {
                name: "Support",
                link: "#",
            },
            {
                name: "Careers",
                link: "#",
            },                                    
        ]
    },
    {
        title: "Quick Link",
        subtitles: [
            {
                name: "Share Location",
                link: "#",
            },
            {
                name: "Orders Tracking",
                link: "#",
            },
            {
                name: "Size Guide",
                link: "#",
            },
            {
                name: "FAQs",
                link: "#",
            },                                    
        ]
    }, 
    {
        title: "Legal",
        subtitles: [
            {
                name: "Terms and conditions",
                link: "#",
            },
            {
                name: "Privacy policy",
                link: "#",
            },                                  
        ]
    },       
]

export{
    navLinks,
    arrivalsList,
    reviewsList,
    socialmedia,
    contactsDict
}