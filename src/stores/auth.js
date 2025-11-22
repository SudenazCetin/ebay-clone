import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loggedIn: false,
  }),
  actions: {
    // DEMO hesap: email: demo@ebayclone.com, şifre: 123456
    login(email, password) {
      if (email === 'demo@ebayclone.com' && password === '123456') {
        this.user = { email }
        this.loggedIn = true
        return true
      }
      return false
    },
    logout() {
      this.user = null
      this.loggedIn = false
    }
  },
})
