import Home from '../views/pages/home'
import Favorite from '../views/pages/favorite'
import Detail from '../views/pages/detail'

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/restaurant/:id': Detail
}

export default routes
