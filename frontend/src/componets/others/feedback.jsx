import axios from 'axios';
import { useEffect, useState } from 'react';

function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://portfolio-backend-v7nt.onrender.com/feedbacks')
            .then((res) => {
                setFeedbacks(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to load feedbacks");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading feedbacks...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div className="feedback_main border border-black border-3 d-flex flex-column p-4">
            <h2>Feedback's</h2>
            <div>
                {feedbacks.length > 0 ? (
                    feedbacks.map((item, i) => (
                        <div key={i} className="mb-3 border-bottom pb-2">
                            <p><b>{item.email}</b></p>
                            <p>Comment {i + 1}: "{item.feedback}"</p>
                        </div>
                    ))
                ) : (
                    <p>No feedbacks yet.</p>
                )}
            </div>
        </div>
    );
}

export default Feedback;
