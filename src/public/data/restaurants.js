import CONFIG from '../global/config'

const DATA = {
  async getAllRestaurants() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/list`)

      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat mengambil data restoran')
      }

      const responseJson = await response.json()
      return responseJson.restaurants
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data restoran:', error.message)
      throw error
    }
  }
}

export default DATA
