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
import Category from '@/pages/Category.vue'
import ProductPage from '@/pages/ProductPage.vue'
import ProductDetail from '@/pages/ProductDetail.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },

  // Ürün detayı
  { path: '/product/:id', name: 'Product', component: ProductPage, props: true },

  // Sepet vs
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/search', name: 'Search', component: Search },

  // Kategori sayfası (Laptops, Computer parts vb.)
  { path: '/category/:slug', name: 'Category', component: Category, props: true },

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
  {
  path: '/category/car-and-truck',
  name: 'CarAndTruck',
  component: () => import('@/pages/CategoryPage.vue'),
}
,
  {
  path: '/returns',
  name: 'Returns',
  component: () => import('@/pages/ReturnsPage.vue'),
}
,

  // Slider’daki “All your faves are here”
  { path: '/faves', name: 'Faves', component: DealsPage },

  // “Sell to the world from Turkey” (şimdilik Home)
  { path: '/sell', name: 'Sell', component: Home },

  // My eBay rotaları (hepsi şimdilik Home’a gidiyor)
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

  // Login & Register
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideChrome: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { hideChrome: true },
  },
  {
  path: '/category/:id',
  name: 'CategoryPage',
  component: () => import('@/pages/CategoryPage.vue')
}
,
{
  path: '/laptops',
  name: 'LaptopsCategory',
  component: () => import('@/pages/LaptopsPage.vue'),
}
,
{
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
