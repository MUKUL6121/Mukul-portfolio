import './A.css'
import reactLogo from '../../../assets/react.svg'

function A() {
    return (
        <div id="main-container">
            <div className="img_div" >
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react animate-spin text-4xl"
                        alt="React logo"
                    />
                </a>
            </div>
            <div className="intro_div">
                <h1>
                    Hello, I'm <span className="highlight-blue">Mukul Jangra</span>
                </h1>
                <h4>
                    I'm a <span className="highlight-green">Web Developer</span>
                </h4>
                <div className="roles">
                    <span className="highlight-blue">React Developer</span>
                    <span id="roles_sep">|</span>
                    <span className="highlight-orange">Backend Enthusiast</span>
                    <span id="roles_sep">|</span>
                    <span className="highlight-purple">Tech Explorer</span>
                </div>
                <p>
                    I build responsive websites & full-stack applications using MERN technologies and more...
                </p>
            </div>
        </div>
    )
};

export default A
