import RestaurantSource from '../src/scripts/data/restaurant-source'
import { initSwalError, initSwalSuccess } from '../src/scripts/utils/swal-initiator'
import PostReview from '../src/scripts/utils/post-review'

jest.mock('../src/scripts/data/restaurant-source', () => ({
  postRestaurantReview: jest.fn()
}))

jest.mock('../src/scripts/utils/swal-initiator', () => ({
  initSwalSuccess: jest.fn(),
  initSwalError: jest.fn()
}))

describe('Post Review for a Restaurant', () => {
  let url, name, review

  beforeEach(async () => {
    document.body.innerHTML = '<div class="detail__review"></div>'

    url = { id: 1 }
    name = 'Code Blu'
    review = 'Ini bukan 5 star, tapi rasanya bintang 5!'
  })

  it('should call postRestaurantReview with correct parameters', async () => {
    await PostReview(url, name, review)

    expect(RestaurantSource.postRestaurantReview).toHaveBeenCalledWith({
      id: url.id,
      name,
      review
    })
  })

  it('should not call postRestaurantReview if data is empty', async () => {
    RestaurantSource.postRestaurantReview.mockReset()

    const invalidUrl = { id: undefined }
    const invalidName = ''
    const invalidReview = ''

    await PostReview(invalidUrl, invalidName, invalidReview)

    expect(RestaurantSource.postRestaurantReview).not.toHaveBeenCalled()
  })

  it('should show Success Alert when review posted', async () => {
    await PostReview(url, name, review)

    expect(initSwalSuccess).toHaveBeenCalledWith('Review Posted!')
  })

  it('should show Error Alert when review data is empty', async () => {
    RestaurantSource.postRestaurantReview.mockReset()

    const invalidUrl = { id: undefined }
    const invalidName = ''
    const invalidReview = ''

    await PostReview(invalidUrl, invalidName, invalidReview)

    expect(initSwalError).toHaveBeenCalled
  })

  it('should add name and review to review container', async () => {
    await PostReview(url, name, review)

    const reviewContainer = document.body.querySelector('.detail__review')
    expect(reviewContainer.innerHTML).toContain(name)
    expect(reviewContainer.innerHTML).toContain(review)
  })

  it('should not add name and review to review container if failed to post review', async () => {
    RestaurantSource.postRestaurantReview.mockRejectedValue(new Error('Failed to post review'))

    const reviewContainer = document.body.querySelector('.detail__review')
    expect(reviewContainer.innerHTML).not.toContain(name)
    expect(reviewContainer.innerHTML).not.toContain(review)
  })
})
