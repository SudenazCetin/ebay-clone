<!-- src/components/molecules/MyEbayMenu.vue -->
<script setup>
import { ref } from 'vue'

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div class="relative" @mouseleave="open = false">
    <!-- Trigger -->
    <button
      @mouseenter="open = true"
      @click="toggle"
      class="flex items-center gap-1 text-sm hover:underline"
    >
      My eBay
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
        viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 10l4 4 4-4" />
      </svg>
    </button>

    <!-- MENU -->
    <div
      v-if="open"
      class="absolute left-0 mt-2 w-48 bg-white shadow-xl border rounded-lg py-2 z-50"
    >
      <a class="menu-item" href="#">Summary</a>
      <a class="menu-item" href="#">Recently viewed</a>
      <a class="menu-item" href="#">Bids/Offers</a>
      <a class="menu-item" href="#">Watchlist</a>
      <a class="menu-item" href="#">Purchase history</a>
      <a class="menu-item" href="#">Buy Again</a>
      <a class="menu-item" href="#">Selling</a>
      <a class="menu-item" href="#">Saved Feed</a>
      <a class="menu-item" href="#">Saved Searches</a>
      <a class="menu-item" href="#">Saved Sellers</a>
      <a class="menu-item" href="#">Payments</a>
      <a class="menu-item" href="#">My Garage</a>
      <a class="menu-item" href="#">Preferences</a>
      <a class="menu-item" href="#">My Collection</a>
      <a class="menu-item" href="#">Messages</a>
      <a class="menu-item" href="#">PSA Vault</a>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  display: block;
  padding: 8px 14px;
  font-size: 14px;
  color: #222;
}
.menu-item:hover {
  background: #f5f5f5;
}
</style>
