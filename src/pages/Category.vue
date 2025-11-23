<!-- src/pages/Category.vue -->
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { products } from '@/data/products'
import ProductCard from '@/components/molecules/ProductCard.vue'

const route = useRoute()

// URL'deki slug: /category/laptops gibi
const slug = computed(() => route.params.slug)

// Başlığı biraz güzelleştirelim
const title = computed(() => {
  const map = {
    'laptops': 'Laptops & Notebooks',
    'computer-parts': 'Computer Components & Parts',
    'smartphones': 'Cell Phones & Smartphones',
  }
  return map[slug.value] || 'Category'
})

// Ürünleri kategoriye göre filtrele
const filteredProducts = computed(() =>
  products.filter(p => p.categorySlug === slug.value)
)
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-4">
      {{ title }}
    </h1>
    <p class="text-sm text-gray-600 mb-6">
      Showing {{ filteredProducts.length }} results
    </p>

    <div
      v-if="filteredProducts.length"
      class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <ProductCard
        v-for="p in filteredProducts"
        :key="p.id"
        :id="p.id"
        :title="p.title"
        :price="p.price"
        :image="p.image"
        :location="p.location"
      />
    </div>

    <div v-else class="py-16 text-center text-gray-600">
      No products in this category yet.
    </div>
  </div>
</template>
