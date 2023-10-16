const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="ri-heart-line" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="ri-heart-fill" aria-hidden="true"></i>
  </button>
`

export { createLikeButtonTemplate, createLikedButtonTemplate }
