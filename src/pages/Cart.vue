<!-- src/pages/Cart.vue -->
<script setup>
import { ref } from 'vue'

/* DEMO ürün – sonra backend veya localStorage ile doldurabiliriz */
const items = ref([
  {
    id: 1,
    title: "96GB (12x8GB) MEMORY FOR DELL POWEREDGE R610 R710 R715 R720 R815 R510 T410 T610",
    img: "https://i.ebayimg.com/images/g/dQMAAOSwA8lkwD1I/s-l1600.jpg",
    seller: "Tech Dealers Store",
    feedback: 98.9,
    qty: 1,
    price: 129.99,
    shipping: 31.26
  }
])
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-4 py-6">

    <!-- 🔵 SIGNED OUT ALERT -->
    <div class="bg-blue-600 text-white p-4 rounded-md mb-6 text-sm">
      You're signed out right now.  
      To save these items or see previously saved items, 
      <RouterLink to="/login" class="underline font-medium">sign in.</RouterLink>
    </div>

    <h1 class="text-3xl font-semibold mb-6">Shopping cart</h1>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

      <!-- 🔵 SOL TARAF - ÜRÜNLER -->
      <div class="space-y-4">

        <div
          v-for="item in items"
          :key="item.id"
          class="border rounded-lg p-4 flex flex-col md:flex-row gap-5"
        >
          <!-- ÜRÜN FOTO -->
          <div class="w-full md:w-40 flex justify-center">
            <img :src="item.img" class="w-32 h-32 object-cover rounded-md border" />
          </div>

          <!-- ÜRÜN BİLGİLERİ -->
          <div class="flex-1">
            <!-- Seller + feedback -->
            <div class="text-sm text-gray-600">
              <span class="font-semibold text-black">{{ item.seller }}</span>  
              <span class="ml-1">{{ item.feedback }}% positive feedback</span>
            </div>

            <!-- Title -->
            <RouterLink
              to="/product"
              class="block mt-1 text-[15px] font-medium underline hover:text-blue-600"
            >
              {{ item.title }}
            </RouterLink>

            <!-- New -->
            <p class="text-sm text-gray-600 mt-1">New</p>
          </div>

          <!-- SAĞ TARAF - QTY + PRICE -->
          <div class="flex flex-col items-end justify-between">
            <!-- Qty Dropdown -->
            <select v-model="item.qty" class="border rounded-md px-2 py-1">
              <option v-for="n in 10" :value="n" :key="n">{{ n }}</option>
            </select>

            <!-- Price -->
            <p class="text-lg font-semibold mt-3">
              US ${{ (item.price).toFixed(2) }}
            </p>
            <p class="text-sm text-gray-600">+ US ${{ item.shipping.toFixed(2) }} shipping</p>

            <!-- Actions -->
            <div class="text-sm mt-3 flex gap-4">
              <button class="underline text-gray-700 hover:text-blue-700">Save for later</button>
              <button class="underline text-gray-700 hover:text-blue-700">Remove</button>
            </div>
          </div>
        </div>

      </div>

      <!-- 🔵 SAĞ TARAF - TOPLAM KISMI -->
      <div class="border rounded-lg p-5 h-fit sticky top-24">
        <h2 class="text-xl font-semibold mb-4">Summary</h2>

        <div class="flex justify-between mb-4 text-gray-700">
          <span>Item ({{ items.length }})</span>
          <span>US ${{ items[0].price.toFixed(2) }}</span>
        </div>

        <div class="flex justify-between text-gray-700 mb-6">
          <span>Shipping</span>
          <span>US ${{ items[0].shipping.toFixed(2) }}</span>
        </div>

        <div class="flex justify-between font-semibold text-lg mb-6">
          <span>Subtotal</span>
          <span>
            US ${{ (items[0].price + items[0].shipping).toFixed(2) }}
          </span>
        </div>

        <button
          class="w-full bg-[#3665F3] text-white rounded-full py-3 font-semibold text-lg hover:brightness-110"
        >
          Go to checkout
        </button>

        <p class="text-xs text-gray-500 mt-2 text-center">
          Purchase protected by <span class="underline">eBay Money Back Guarantee</span>
        </p>
      </div>
    </div>
  </div>
</template>
