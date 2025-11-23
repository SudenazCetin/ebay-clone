<!-- src/pages/Product.vue -->
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { products } from '@/data/products'
import ProductGallery from '@/components/molecules/ProductGallery.vue'
import ProductInfo from '@/components/molecules/ProductInfo.vue'
import { addToCart } from '@/stores/cartStore'

const route = useRoute()
const router = useRouter()

const productId = computed(() => Number(route.params.id))

const product = computed(() => {
  return products.find((p) => p.id === productId.value) || null
})

const images = computed(() => {
  if (!product.value) return []
  if (product.value.images && product.value.images.length > 0) {
    return product.value.images
  }
  if (product.value.image) {
    return [product.value.image]
  }
  return []
})

// Add to cart
const handleAddToCart = () => {
  if (!product.value) return
  addToCart(product.value, { quantity: 1 })
  console.log('Added from Product.vue')
}

// Buy It Now -> ekle + cart sayfasına git
const handleBuyNow = () => {
  if (!product.value) return
  addToCart(product.value, { quantity: 1 })
  router.push({ name: 'Cart' })
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div
      v-if="product"
      class="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
    >
      <ProductGallery :images="images" />

      <ProductInfo
        :product="product"
        @add-to-cart="handleAddToCart"
        @buy-now="handleBuyNow"
      />
    </div>

    <div v-else class="text-center py-20">
      <p class="text-lg font-semibold">Product not found.</p>
    </div>
  </div>
</template>
