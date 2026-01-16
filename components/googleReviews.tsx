'use client';
import { useEffect, useState } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          const result = await res.json();
          console.log('Reviews:', result);
          setReviews(result);
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };
    fetchReviews();
  }, []);
  return (
    <div>
      {/* MAPPING REVIEWS TO DISPLAY EACH REVIEW IN A DIV ELEMENT */}
      {/* {reviews?.map((review) => (
        <div key={review.id || review.time}>
          <p>
            <strong>NAME : </strong>
            {review.author_name}
          </p>
          <p>
            <strong>RATING : </strong>
            {review.rating}
          </p>
          <p>
            <strong>TEXT : </strong>
            {review.text}
          </p>
          {/* USER PROFILE PHOTO */}
      {/* {review.profile_photo_url && (
            <img
              src={review.profile_photo_url}
              alt={`${review.author_name}'s profile`}
            />
          )}
          {/* PHOTOS ASSOCIATED WITH REVIEW */}
      {/* {review.photos &&
            review.photos.map((photo, index) => (
              <img
                key={index}
                src={photo.getUrl()}
                alt={`Photo ${index + 1} for review by ${review.author_name}`}
              />
            ))}
          <hr /> */}
      {/* </div> */}
      {/*} ))} */}
    </div>
  );
};

export default GoogleReviews;
