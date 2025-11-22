<!-- src/components/molecules/ProductCard.vue -->
<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
  title: String,
  price: Number,
  image: String,
  location: String,
})
</script>

<template>
  <RouterLink
    :to="`/product/${id}`"
    class="block border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
  >
    <div class="aspect-[4/3] bg-gray-100">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-3 space-y-1">
      <h3 class="text-sm font-semibold line-clamp-2">{{ title }}</h3>
      <p class="text-lg font-bold text-[#222]">
        ${{ price.toFixed(2) }}
      </p>
      <p class="text-xs text-gray-500">
        {{ location }}
      </p>
    </div>
  </RouterLink>
</template>
