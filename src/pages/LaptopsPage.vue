<!-- src/pages/LaptopsPage.vue -->
<script setup>
import { computed } from 'vue'
import { products } from '@/data/products'

// Ürünlerden laptop kategorisini seç
// Eğer categoryId yoksa fallback olarak ilk 6 ürünü gösteriyoruz
const laptopProducts = computed(() => {
  let list = products.filter((p) => p.categoryId === 'laptops')

  if (!list.length) {
    list = products.slice(0, 6)
  }

  return list
})
</script>

<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-[1300px] mx-auto px-4 py-6">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-3">
        eBay &gt; Electronics &gt; Computers/Tablets &amp; Networking &gt;
        <span class="font-semibold text-black">Laptops &amp; Netbooks</span>
      </nav>

      <!-- Başlık -->
      <h1 class="text-3xl font-bold mb-4">
        Laptops &amp; Netbooks
      </h1>

      <div class="grid grid-cols-[260px,1fr] gap-6">
        <!-- SOL SİDEBAR -->
        <aside>
          <h2 class="text-sm font-semibold mb-3">
            Shop by category
          </h2>

          <ul class="text-sm space-y-1 text-blue-700">
            <li class="font-semibold">Computers/Tablets &amp; Networking</li>
            <li class="font-semibold ml-2 mt-1">
              Laptops &amp; Netbooks
            </li>
            <li class="ml-4 hover:underline cursor-pointer">
              Apple Laptops
            </li>
            <li class="ml-4 hover:underline cursor-pointer">
              PC Laptops &amp; Netbooks
            </li>
          </ul>
        </aside>

        <!-- SAĞ ANA İÇERİK -->
        <main class="space-y-4">
          <!-- Üst filtre butonları -->
          <section class="flex flex-wrap gap-2">
            <button
              class="px-3 py-1 rounded-full border text-xs font-semibold bg-black text-white"
            >
              All Listings
            </button>
            <button
              class="px-3 py-1 rounded-full border text-xs hover:bg-gray-50"
            >
              Auction
            </button>
            <button
              class="px-3 py-1 rounded-full border text-xs hover:bg-gray-50"
            >
              Buy It Now
            </button>
            <button
              class="px-3 py-1 rounded-full border text-xs hover:bg-gray-50"
            >
              Best Offer
            </button>
          </section>

          <!-- Alt filtre barı (marka, condition vs. sadece görsel amaçlı) -->
          <section
            class="flex flex-wrap gap-2 text-xs mt-1 border-b pb-3"
          >
            <button class="px-3 py-1 rounded-full border hover:bg-gray-50">
              Brand
            </button>
            <button class="px-3 py-1 rounded-full border hover:bg-gray-50">
              Most Suitable For
            </button>
            <button class="px-3 py-1 rounded-full border hover:bg-gray-50">
              Condition
            </button>
            <button class="px-3 py-1 rounded-full border hover:bg-gray-50">
              Price
            </button>
            <button class="px-3 py-1 rounded-full border hover:bg-gray-50">
              Delivery Options
            </button>
            <button class="px-3 py-1 rounded-full border hover:bg-gray-50">
              Filter
            </button>
          </section>

          <!-- ÜRÜN LİSTESİ -->
          <section class="space-y-4 mt-2">
            <div
              v-for="item in laptopProducts"
              :key="item.id"
              class="flex gap-4 border-b pb-4 pt-2"
            >
              <!-- Ürün görseli -->
              <div
                class="w-40 h-32 flex-shrink-0 border rounded-md overflow-hidden bg-white"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-contain"
                />
              </div>

              <!-- Ürün bilgileri -->
              <div class="flex-1">
                <p class="text-sm text-blue-800 hover:underline mb-1">
                  {{ item.title }}
                </p>

                <p class="text-sm text-gray-600 mb-1">
                  {{ item.location || 'Seller location not specified' }}
                </p>

                <p class="text-xl font-semibold mb-1">
                  {{
                    typeof item.price === 'number'
                      ? '$' + item.price.toFixed(2)
                      : item.price
                  }}
                </p>

                <p class="text-xs text-gray-500">
                  Condition:
                  <span class="font-medium">
                    {{ item.condition || 'Good - Refurbished' }}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
