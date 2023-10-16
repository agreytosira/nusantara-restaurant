import UrlParser from '../../routes/url-parser'
import Spinner from '../templates/spinner'
import RestaurantSource from '../../data/resto-source'
import restoDetail from '../templates/resto-detail'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import PostReview from '../../utils/post-review'
import { initSwalError } from '../../utils/swal-initiator'

const Detail = {
  async render() {
    return `
        <div id="loading"></div>

        <div class="like" id="likeButtonContainer"></div>

        <div id="main-container">
          <section class="detail"></section>

          <div class="review__form">
            <form autocomplete="on">
              <div class="input__group">
                <label for="input__name" class="form-label">Name</label>
                <input type="text" class="form-control" id="input__name" minlength="3" placeholder="Input your name..." required>
              </div>

              <div class="input__group">
                <label for="input__review" class="form-label">Review</label>
                <input type="text" class="form-control" id="input__review" minlength="3" placeholder="Input your review..." required>
              </div>

              <div class="submit__group">
                <button id="submit__review" type="submit" class="btn-primary">Submit Review</button>  
              </div>
            </form>
          </div>
        </div>
    `
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    const loading = document.querySelector('#loading')
    const mainContainer = document.querySelector('#main-container')
    const detailContainer = document.querySelector('.detail')
    document.querySelector('.hero').style.display = 'none'
    document.querySelectorAll('.navbar__item').forEach((button) => {
      button.classList.remove('active')
    })

    // change main display to spinner
    mainContainer.style.display = 'none'
    loading.innerHTML = Spinner()

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id)

      // use the detail data
      console.info(data)
      detailContainer.innerHTML += restoDetail(data.restaurant)

      // init like button
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data
      })

      // change spinner display to main
      mainContainer.style.display = 'block'
      loading.style.display = 'none'

      // review form
      const btnSubmitReview = document.querySelector('#submit__review')
      const inputName = document.querySelector('#input__name')
      const inputReview = document.querySelector('#input__review')

      btnSubmitReview.addEventListener('click', async (e) => {
        e.preventDefault()

        // POST review
        await PostReview(url, inputName.value, inputReview.value)

        // clear form input
        inputName.value = ''
        inputReview.value = ''
      })
    } catch (err) {
      console.error(err)

      mainContainer.style.display = 'block'
      loading.style.display = 'none'
      detailContainer.innerHTML = `Error: ${err.message}`
      initSwalError(err.message)
    }
  }
}

export default Detail
