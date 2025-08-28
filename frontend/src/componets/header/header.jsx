import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div id="header_main" className="mt-2 mb-2 w-100">
            <div id="icon">
                <Link to="/">
                    <h3 className="h3">Portfolio</h3>
                </Link>
            </div>

            <div className="dropdown">
                {/* Hamburger toggler visible on small screens */}
                <button
                    className="toggle_btn btn btn-primary d-lg-none dropdow"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                    data-bs-toggle="dropdown"
                >
                    &#9776; {/* Hamburger icon */}
                </button>

                {/* Desktop links */}
                <div
                    id="links"
                    className="d-none d-lg-flex"
                    style={{ gap: "40px" }}
                >
                    <div>
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div>
                        <Link to="/certificate">Certificates</Link>
                    </div>
                    <div>
                        <Link to="/contactMe">Contact Me</Link>
                    </div>
                    <div>
{/*                         <Link to="/feedbacks">Feedbacks</Link> */}
                    </div>
                </div>

                {/* Mobile dropdown links */}
                {isOpen && (
                    <ul
                        className="dropdown-menu show d-lg-none "
                        style={{ marginTop: "20px", marginLeft: "-100px" }}
                    >
                        <li>
                            <Link className="dropdown-item" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/certificate" onClick={() => setIsOpen(false)}>Certificates</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/contactMe" onClick={() => setIsOpen(false)}>Contact Me</Link>
                        </li>
                        <li>
{/*                             <Link className="dropdown-item" to="/feedbacks" onClick={() => setIsOpen(false)}>Feedbacks</Link> */}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Header;
