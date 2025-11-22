// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'
import Cart from '@/pages/Cart.vue'
import Search from '@/pages/Search.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Collectibles from '@/pages/Collectibles.vue'
import DealsPage from '@/pages/DealsPage.vue'
import DealDetail from '@/pages/DealDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product', name: 'Product', component: Product },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/search', name: 'Search', component: Search },

  // Collectibles sayfası
  { path: '/collectibles', name: 'Collectibles', component: Collectibles },

  // Deals liste sayfası
  { path: '/deals', name: 'Deals', component: DealsPage },

  // Tekil deal sayfası
  {
    path: '/deals/:id',
    name: 'DealDetail',
    component: DealDetail,
    props: true,
  },

  // Slider’daki “All your faves are here”
  { path: '/faves', name: 'Faves', component: DealsPage },

  // “Sell to the world from Turkey”
  { path: '/sell', name: 'Sell', component: Home },

  // 🔹 My eBay yolları (şimdilik hepsi Home)
  { path: '/my-ebay/summary',          name: 'MyEbaySummary',          component: Home },
  { path: '/my-ebay/recently-viewed',  name: 'MyEbayRecentlyViewed',   component: Home },
  { path: '/my-ebay/bids-offers',      name: 'MyEbayBidsOffers',       component: Home },
  { path: '/my-ebay/watchlist',        name: 'MyEbayWatchlist',        component: Home },
  { path: '/my-ebay/purchase-history', name: 'MyEbayPurchaseHistory',  component: Home },
  { path: '/my-ebay/buy-again',        name: 'MyEbayBuyAgain',         component: Home },
  { path: '/my-ebay/selling',          name: 'MyEbaySelling',          component: Home },
  { path: '/my-ebay/saved-feed',       name: 'MyEbaySavedFeed',        component: Home },
  { path: '/my-ebay/saved-searches',   name: 'MyEbaySavedSearches',    component: Home },
  { path: '/my-ebay/saved-sellers',    name: 'MyEbaySavedSellers',     component: Home },
  { path: '/my-ebay/payments',         name: 'MyEbayPayments',         component: Home },
  { path: '/my-ebay/my-garage',        name: 'MyEbayMyGarage',         component: Home },
  { path: '/my-ebay/preferences',      name: 'MyEbayPreferences',      component: Home },
  { path: '/my-ebay/my-collection',    name: 'MyEbayMyCollection',     component: Home },
  { path: '/my-ebay/messages',         name: 'MyEbayMessages',         component: Home },
  { path: '/my-ebay/psa-vault',        name: 'MyEbayPsaVault',         component: Home },

  // Login sayfası
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideChrome: true },
  },

  // Register sayfası
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { hideChrome: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
