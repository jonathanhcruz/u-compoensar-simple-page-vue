import Menu from './menu.vue'
import { withComponentHandler } from '../../HOC'
import ErrorPage from '../404/index.vue'

export default withComponentHandler(Menu, {
  fallback: ErrorPage,
})
