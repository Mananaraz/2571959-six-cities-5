﻿import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { addReview } from '../../store/offers/api-actions';

interface ReviewFormProps {
  offerId: string;
}

export function ReviewForm({ offerId }: ReviewFormProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, rating: Number(value) });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, comment: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addReview({ params: { offerId }, data: formData }));
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={5}
          id="5-stars"
          type="radio"
          checked={formData.rating === 5}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={4}
          id="4-stars"
          type="radio"
          checked={formData.rating === 4}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={3}
          id="3-stars"
          type="radio"
          checked={formData.rating === 3}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={2}
          id="2-stars"
          type="radio"
          checked={formData.rating === 2}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={1}
          id="1-star"
          type="radio"
          checked={formData.rating === 1}
          onChange={handleRatingChange}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        maxLength={300}
        minLength={50}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            formData.comment.length > 300 ||
            formData.comment.length < 50 ||
            formData.rating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
