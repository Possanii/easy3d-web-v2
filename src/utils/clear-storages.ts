import Cookies from 'js-cookie'

export function clearStorages() {
  Cookies.remove('auth_token')
  localStorage.removeItem('easy3d:store')
  sessionStorage.clear()
}
