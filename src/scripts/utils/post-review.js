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

  await RestaurantSource.postRestaurantReview(dataInput)
  initSwalSuccess('Review Posted!')

  reviewContainer.innerHTML += newReview
}

export default PostReview
