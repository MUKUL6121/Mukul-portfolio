import geeksterCert from '../../assets/Geekster Certificate for HTML and CSS.pdf';
import mernCert from '../../assets/Ducat mern.pdf';

export default function Certificate() {
    return (
        <div className="container text-center my-5 w-100 h-100">
            <h2 className="mb-4">Certificates</h2>
            <ol className="list-unstyled">
                <li>
                    <a
                        href={geeksterCert}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "blue", fontSize: "20px" }}
                    >
                        Geekster (HTML & CSS)
                    </a>
                </li>
                <li>
                    <a
                        href={mernCert}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "blue", fontSize: "20px" }}
                    >
                        MERN Stack
                    </a>
                </li>
            </ol>
        </div>
    );
};