<script setup>
import { RouterLink } from 'vue-router'
import { totalCount } from '@/stores/cartStore'
import SearchBar from '@/components/molecules/SearchBar.vue'
import Logo from '@/components/atoms/Logo.vue'
import MyEbayMenu from '@/components/molecules/MyEbayMenu.vue'

function handleSearch(payload) {
  console.log('search from header:', payload.query, 'cat:', payload.category)
}

// 🔵 Sepet adedi (store’dan gelen computed)
const cartCount = totalCount
</script>


<template>
  <header class="w-full bg-white">
    <div class="border-b border-black/10">
      <div class="mx-auto max-w-[1455px] px-4">
        <!-- 🔵 ÜST MENÜ BAR -->
        <div class="hidden md:flex h-10 items-center text-sm text-gray-900 gap-6">
          <!-- LOGIN / REGISTER -->
          <div class="flex items-center gap-1">
            <span>Hi!</span>
            <RouterLink
              to="/login"
              class="text-blue-600 hover:underline"
            >
              Sign in
            </RouterLink>
            <span>or</span>
            <RouterLink
              to="/register"
              class="text-blue-600 hover:underline"
            >
              register
            </RouterLink>
          </div>

          <!-- Üst menü linkleri -->
          <RouterLink to="/deals" class="hover:underline">
            Daily Deals
          </RouterLink>
          <a class="hover:underline" href="#">Brand Outlet</a>
          <a class="hover:underline" href="#">Gift Cards</a>
          <a class="hover:underline" href="#">Help &amp; Contact</a>

          <div class="ml-auto flex items-center gap-4">
            <!-- Ship to -->
            <a href="#" class="hover:underline">Ship to</a>

            <!-- Sell -->
            <RouterLink to="/sell" class="hover:underline">
              Sell
            </RouterLink>

            <!-- Watchlist -->
            <RouterLink
              to="/my-ebay/watchlist"
              class="hover:underline"
            >
              Watchlist
            </RouterLink>

            <!-- 🔵 My eBay -->
            <MyEbayMenu />

            <!-- notification -->
            <button class="p-2 rounded-full hover:bg-gray-100">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2a6 6 0 00-6 6v3.6L4.3 13.3A1 1 0 005 15h14a1 1 0 00.7-1.7L18 11.6V8a6 6 0 00-6-6zM9 18a3 3 0 006 0H9z"
                />
              </svg>
            </button>

            <!-- 🟦 Cart + Badge -->
            <RouterLink
              to="/cart"
              class="p-2 rounded-full hover:bg-gray-100"
            >
              <div class="relative">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13l-2 9h14l-2-9M9 22a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <!-- sadece sepet doluyken göster -->
                <span
                  v-if="cartCount > 0"
                  class="absolute -top-1 -right-1 min-w-[16px] h-[16px]
                         px-1 rounded-full bg-red-600 text-white text-[10px]
                         flex items-center justify-center"
                >
                  {{ cartCount }}
                </span>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- LOGO + SEARCH -->
        <div class="grid grid-cols-[auto_auto_1fr_auto] items-center gap-5 py-3">
          <RouterLink to="/">
            <Logo class="h-10 md:h-12 w-auto" />
          </RouterLink>

          <button
            class="hidden md:inline-flex items-center gap-2 text-[14px] text-gray-700 hover:text-black"
          >
            <span>Shop by</span>
            <span class="font-medium">category</span>
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5 10l3.5 3.5L15.5 10" />
            </svg>
          </button>

          <SearchBar @search="handleSearch" />

          <RouterLink
            to="/search"
            class="hidden lg:inline text-sm text-gray-600 hover:underline"
          >
            Advanced
          </RouterLink>
        </div>

        <!-- ALT NAV -->
        <nav
          class="hidden md:flex w-full justify-center gap-6 text-sm text-gray-700 pb-3"
        >
          <a class="hover:text-black">eBay Live</a>
          <a class="hover:text-black">Saved</a>
          <a class="hover:text-black">Electronics</a>
          <a class="hover:text-black">Motors</a>
          <a class="hover:text-black">Fashion</a>
          <RouterLink
            to="/collectibles"
            class="hover:text-black"
          >
            Collectibles and Art
          </RouterLink>
          <a class="hover:text-black">Sports</a>
          <a class="hover:text-black">Health &amp; Beauty</a>
          <a class="hover:text-black">Industrial equipment</a>
          <a class="hover:text-black">Home &amp; Garden</a>
          <RouterLink
            to="/deals"
            class="hover:text-black"
          >
            Deals
          </RouterLink>
          <RouterLink
            to="/sell"
            class="hover:text-black"
          >
            Sell
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
