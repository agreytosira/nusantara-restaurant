import RestaurantSource from '../data/restaurant-source'
import { initSwalSuccess } from './swal-initiator'

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review
  }

  const reviewContainer = document.querySelector('.detail__review')
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const newReview = `
    <div class="detail__review-item">
      <div class="review__header">
      <p class="review__name">${name}</p>

      <p class="review__date">${date}</p>
      </div>

    <div class="review__body">
      ${review}
    </div>
    </div>
  `

  const reviewResponse = await RestaurantSource.postRestaurantReview(dataInput)
  console.log('🚀 ~ file: post-review.js ~ line 33 ~ PostReview ~ reviewResponse', reviewResponse)

  initSwalSuccess('Review Posted!')

  reviewContainer.innerHTML += newReview
}

export default PostReview
