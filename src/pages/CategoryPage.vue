<!-- src/pages/CategoryPage.vue -->
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '@/data/products'

const route = useRoute()
const router = useRouter()

// Sol menüdeki kategoriler
const categories = [
  { id: 'car-truck-parts', label: 'Car & Truck Parts & Accessories' },
  { id: 'accessory-belts', label: 'Accessory Belts' },
  { id: 'driver-assistance', label: 'Advanced Driver Assistance Systems' },
  { id: 'air-fuel-delivery', label: 'Air & Fuel Delivery' },
  { id: 'air-conditioning', label: 'Air Conditioning & Heating' },
  { id: 'brakes', label: 'Brakes & Brake Parts' },
  { id: 'electric-hybrid', label: 'Electric, Hybrid & PHEV Specific Parts' },
  { id: 'engine-cooling', label: 'Engine Cooling Components' },
  { id: 'engines', label: 'Engines & Engine Parts' },
  { id: 'exhaust', label: 'Exhaust & Emission Systems' },
  { id: 'exterior', label: 'Exterior Parts & Accessories' },
  { id: 'ignition', label: 'Ignition Systems & Components' },
  { id: 'interior', label: 'Interior Parts & Accessories' },
]

// URL’deki id’ye göre aktif kategori
const currentCategory = computed(() => {
  return (
    categories.find((c) => c.id === route.params.id) ||
    categories[0]
  )
})

// Best selling ürünler
// Eğer ileride ürünlere categoryId eklersen onu da kullanır,
// şimdilik yoksa direkt ilk 8 ürünü gösterir
const bestSelling = computed(() => {
  let list = products.filter(
    (p) => p.categoryId === currentCategory.value.id
  )

  if (!list.length) {
    list = products.slice(0, 8)
  }

  return list
})

function goCategory(id) {
  router.push({ name: 'CategoryPage', params: { id } })
}
</script>

<template>
  <div class="bg-white">
    <div class="max-w-[1350px] mx-auto px-4 py-6">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-3">
        eBay &gt; eBay Motors &gt; Parts &amp; Accessories &gt;
        <span class="font-semibold text-black">
          {{ currentCategory.label }}
        </span>
      </nav>

      <!-- Sayfa başlığı -->
      <h1 class="text-3xl font-bold mb-4">
        {{ currentCategory.label }}
      </h1>

      <div class="grid grid-cols-[260px,1fr] gap-6">
        <!-- SOL: Shop by category -->
        <aside>
          <h2 class="text-sm font-semibold mb-3">Shop by category</h2>
          <ul class="text-sm space-y-1">
            <li
              class="font-semibold mb-2 cursor-pointer"
              @click="goCategory('parts-accessories')"
            >
              Parts &amp; Accessories
            </li>

            <li v-for="cat in categories" :key="cat.id">
              <button
                class="w-full text-left py-1 px-1 rounded hover:bg-gray-100"
                :class="{
                  'font-semibold text-black': cat.id === currentCategory.id,
                  'text-gray-700': cat.id !== currentCategory.id
                }"
                @click="goCategory(cat.id)"
              >
                {{ cat.label }}
              </button>
            </li>
          </ul>
        </aside>

        <!-- SAĞ: Hero banner + Best selling -->
        <main>
          <!-- Hero banner -->
          <section
            class="mb-6 rounded-lg overflow-hidden bg-black text-white flex items-center"
          >
            <!-- Solda yazı -->
            <div class="p-6 w-[40%]">
              <p class="text-xl font-semibold mb-2">Future in motion:</p>
              <p class="text-2xl font-bold leading-snug">
                Advanced electric<br />
                and hybrid components
              </p>
            </div>

            <!-- Sağda görsel -->
            <div class="w-[60%]">
              <img
                src="/assets/banners/ev-charging.jpg"
                alt="Electric vehicle charging"
                class="w-full h-full object-cover"
              />
            </div>
          </section>

          <!-- Best selling -->
          <section>
            <div class="flex items-center justify-between mb-3">
              <h2 class="text-xl font-semibold">Best selling</h2>
              <button class="text-xs text-blue-600 hover:underline">
                See All
              </button>
            </div>

            <!-- Ürün kartları -->
            <div
              v-if="bestSelling.length"
              class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              <div
                v-for="product in bestSelling"
                :key="product.id"
                class="border rounded-lg p-3 hover:shadow-md cursor-pointer bg-white"
              >
                <div class="w-full aspect-[4/3] mb-2">
                  <img
                    :src="product.image"
                    :alt="product.title"
                    class="w-full h-full object-contain"
                  />
                </div>

                <p class="text-xs text-gray-600 mb-1 line-clamp-2">
                  {{ product.title }}
                </p>

                <div class="text-sm font-semibold mb-1">
                  {{
                    typeof product.price === 'number'
                      ? '$' + product.price.toFixed(2)
                      : product.price
                  }}
                </div>

                <div class="text-[11px] text-gray-500">
                  ★★★★☆
                </div>
              </div>
            </div>

            <p
              v-else
              class="py-10 text-center text-gray-500 text-sm"
            >
              No products in this category yet.
            </p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
