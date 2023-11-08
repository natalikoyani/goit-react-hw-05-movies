import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "api";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        const fetchData = async () => {
            try {
                const data = await fetchReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [movieId]);

    return (
        reviews.length === 0
            ? 'We don`t have any reviews for this movie'
            : < ul >
                {
                    reviews.map(review => (
                        <li key={review.id}>
                            <h4>{review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))
                }
            </ul >
    )
}