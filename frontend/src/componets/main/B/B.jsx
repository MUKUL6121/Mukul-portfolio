import './B.css'

function B() {
    return (
        <div id="B-container" className="container w-100">
            <div>
                <div id="heading">
                    <h2>About Me</h2>
                </div>
                <div id="details">
                    I completed my BCA degree from DCRUST University. I'm passionate about web development and love to explore new technologies. I'm skilled in front-end tools like React and also in back-end technologies such as Node.js, Express.js, and MongoDB.
                </div>
            </div>
            <hr />
            <div>
                <h2 id="heading" className="tech-heading">Technologies</h2>
                <div className="tech-list-container">
                    <ul className="tech-list">
                        <li className="list-heading"><b>Front-end</b></li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>REST API</li>
                        <li>More...</li>
                    </ul>
                    <ul className="tech-list">
                        <li className="list-heading"><b>Back-end</b></li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>REST API</li>
                        <li>JWT</li>
                        <li>More...</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default B;
