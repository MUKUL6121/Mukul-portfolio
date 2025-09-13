import './C.css'
import './card.css';
import img from '../../../assets/alarm.png';
import news_img from '../../../assets/news.png'
import cart_img from '../../../assets/cart.png'
import sps_img from '../../../assets/sps.png';
// import Card from './card'

function C() {
    const data = [
        {
            img: img,
            alt: "alarm app",
            title: "Stop-Watch",
            tech: ["HTML", "JavaScript"],
            link: "https://stopwatch-rfnh.onrender.com"
        },
        {
            img: sps_img,
            alt: "sps game",
            title: "Stone,Paper,Scissor",
            tech: ["HTML", "JavaScript"],
            link: "https://github.com/MUKUL6121/stone-paper-scissor.git"
        },
        {
            img: news_img,
            alt: "news app",
            title: "Today's News",
            tech: ["React"],
            link: "https://news-app-j63z.onrender.com"
        },
        {
            img: cart_img,
            alt: "e-mart",
            title: "E-Mart",
            tech: ["PHP", "MySQL"],
            link: "https://e-mart.onrender.com"
        },
    ];

    let cards = data.map(item => {
        return (
            <div className="card p-4 w-75">
                <span className="img-div ">
                    <img src={item.img} alt={item.alt} />
                </span>
                <span className='heading'>
                    <h3>{item.title}</h3>
                </span>
                <span className="tech-div">
                    {item.tech.map(tech => (
                        <span className='techi' key={tech}>{tech}</span>
                    ))}
                </span>
                <span className="link-div">
                    <a href={item.link} target="_blank" style={{ width: '100%' }}><button >View</button></a>
                </span>
            </div>
        )
    })
    return (
        <div id="C-container bg-danger" style={{ background: "#f7f9fa", borderRadius: "20px", width: "100%", padding: "0px", marginTop: "20px" }}>
            <h2 className="projects-title" style={{ textAlign: "center", fontSize: "2.5rem", color: "#222" }}>
                Projects
            </h2>
            <div className="projects-list d-flex p-3 gap-3 w-100 justify-content-center align-items-center">
                {cards}
            </div>
        </div>
    )
}

export default C;
