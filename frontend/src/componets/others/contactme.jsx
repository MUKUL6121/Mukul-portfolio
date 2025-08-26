import { useState } from 'react';
import './contactme.css'
import axios from 'axios';
function ContactMe() {
    const [mail, setmail] = useState("");
    const [feedbacktext, setfeedback] = useState("");
    const [confirm, setconfirm] = useState("");
    async function submit_handle(e) {
        e.preventDefault();
        const url = "https://portfolio-backend-v7nt.onrender.com/post";
        const email = mail;
        const feedback = feedbacktext;
        const data = { email, feedback };

        await axios.post(url, data);
        done();
    };
    function done() {
        setmail("");
        setfeedback("");
        setconfirm("Feedback sent successfully!");
    }

    return (
        <div className="contact_main d-flex flex-column">
            <div><h2>Contact Me</h2></div>
            <div>
                <div><h2>{confirm}</h2></div>
                <form onSubmit={submit_handle} className="working w-100">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            <b>Email address :</b>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            value={mail}
                            onChange={(e) => setmail(e.target.value)}
                        />
                        <p>Write your feedback about my portfolio and send to mail.</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            <b>Feedback :</b>
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            value={feedbacktext}
                            onChange={(e) => setfeedback(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>

            </div>
        </div>
    )
};

export default ContactMe;
