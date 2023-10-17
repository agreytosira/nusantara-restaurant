import { openDB } from 'idb'
import CONFIG from '../global/config'

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG

const openIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true
    })
  }
})

const FavRestaurantIdb = {
  async getRestaurant(id) {
    return (await openIdb).get(OBJECT_STORE_NAME, id)
  },

  async getAllRestaurant() {
    return (await openIdb).getAll(OBJECT_STORE_NAME)
  },

  async putRestaurant(restaurant) {
    return (await openIdb).put(OBJECT_STORE_NAME, restaurant)
  },

  async deleteRestaurant(id) {
    return (await openIdb).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavRestaurantIdb
