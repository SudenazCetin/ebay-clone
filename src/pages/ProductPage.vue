<script setup>
import { useRoute } from 'vue-router'
import { products } from '@/data/products'   // ürünlerin olduğu dosya

const route = useRoute()
const id = Number(route.params.id)

// ID’ye göre ürünü bul
const product = products.find(p => p.id === id)
</script>

<template>
  <div class="max-w-5xl mx-auto py-10 px-4">

    <!-- Ürün bulunamadı -->
    <div v-if="!product" class="text-center text-xl font-semibold">
      Product not found.
    </div>

    <!-- Ürün bulunduysa -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <!-- SOL: Fotoğraf -->
      <div>
        <img
          :src="product.image"
          alt=""
          class="w-full rounded-xl border"
        />
      </div>

      <!-- SAĞ: Bilgiler -->
      <div>
        <h1 class="text-2xl font-bold mb-3">
          {{ product.title }}
        </h1>

        <p class="text-3xl font-semibold text-blue-600 mb-5">
          ${{ product.price }}
        </p>

        <p class="text-gray-700 leading-relaxed mb-6">
          {{ product.description }}
        </p>

        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
        >
          Add to cart
        </button>
      </div>

    </div>
  </div>
</template>
