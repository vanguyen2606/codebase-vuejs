import { defineStore } from 'pinia'
import { AUTH_LOCAL_STORAGE } from '@common/constants/auth'
import router from '@router'

export default useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE)),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
        const user = {
            name: 'Nguyen Tran',
            age: 18
        }
        this.user = user
        localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(user))
        router.push(this.returnUrl || '/')
    },
    logout() {
        this.user = null
        localStorage.removeItem(AUTH_LOCAL_STORAGE)
        router.push('/login')
    }
  }
})
