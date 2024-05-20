import React from 'react'
import "./reviews.scss"
import ProductReviews from './ProductReviews/ProductReviews'
import ReviewsList from './ReviewsList/ReviewsList'
import ReviewsFilter from './ReviewsList/ReviewsFilter/ReviewsFilter'

function Reviews() {
  return (
   <div className="reviews">
    
    <ProductReviews/>
    <div className="reviewsList-reviewsFilter">
      <ReviewsFilter cStyle="reviews-Filter1"/>
      <ReviewsList/>
    </div>
   </div>
  )
}

export default Reviews