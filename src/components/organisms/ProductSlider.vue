<!-- src/components/organisms/ProductSlider.vue -->
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from '@/components/molecules/ProductCard.vue'

const props = defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  products: {
    type: Array,
    default: () => [],
  },
  showPromoCard: {
    type: Boolean,
    default: true,
  },
  // Bu sliderın ait olduğu kategori (ör: "car-truck-parts")
  categoryId: {
    type: String,
    default: '',
  },
})

const router = useRouter()
const scrollRef = ref(null)

const hasCategory = computed(() => !!props.categoryId)

// Slider sağ / sol kaydırma
const scroll = (direction) => {
  const el = scrollRef.value
  if (!el) return

  const amount = 320 // her tıklamada kayacağı piksel
  el.scrollBy({
    left: direction === 'next' ? amount : -amount,
    behavior: 'smooth',
  })
}

// "See all" ve siyah karttaki "Shop now" tıklanınca kategori sayfasına git
const goToCategoryPage = () => {
  if (!props.categoryId) return
  router.push({
    name: 'CategoryPage',
    params: { id: props.categoryId },
  })
}
</script>

<template>
  <section>
    <!-- Başlık kısmı -->
    <div class="flex items-baseline justify-between mb-4">
      <div>
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <p v-if="subtitle" class="text-sm text-gray-500 mt-1">
          {{ subtitle }}
        </p>
      </div>

      <!-- See all: kategori Id varsa tıklanabilir -->
      <button
        class="text-sm text-blue-600 hover:underline disabled:text-gray-400 disabled:cursor-default"
        :disabled="!hasCategory"
        @click="goToCategoryPage"
      >
        See all
      </button>
    </div>

    <div class="relative">
      <!-- Sol ok -->
      <button
        class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
               w-9 h-9 rounded-full bg-white shadow-md border border-gray-200
               items-center justify-center"
        @click="scroll('prev')"
      >
        ‹
      </button>

      <!-- Sağ ok -->
      <button
        class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
               w-9 h-9 rounded-full bg-white shadow-md border border-gray-200
               items-center justify-center"
        @click="scroll('next')"
      >
        ›
      </button>

      <!-- Asıl slider alanı -->
      <div
        ref="scrollRef"
        class="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-4"
      >
        <!-- Soldaki siyah “Today’s Deals” kartı -->
        <div
          v-if="showPromoCard"
          class="flex-shrink-0 w-64 bg-black text-white rounded-2xl p-6
                 flex flex-col justify-between"
        >
          <div>
            <p class="text-sm font-medium opacity-80">Today&apos;s Deals</p>
            <h3 class="text-2xl font-semibold mt-2">
              All With Free Shipping
            </h3>
          </div>

          <button
            class="mt-6 inline-flex items-center justify-center px-5 py-2
                   rounded-full bg-white text-black text-sm font-semibold
                   disabled:bg-gray-200 disabled:text-gray-500"
            :disabled="!hasCategory"
            @click="goToCategoryPage"
          >
            Shop now
          </button>
        </div>

        <!-- Ürün kartları -->
        <div
          v-for="item in products"
          :key="item.id"
          class="flex-shrink-0 w-64"
        >
          <ProductCard
            :id="item.id"
            :title="item.title"
            :price="item.price"
            :image="item.image"
            :location="item.location"
          />
        </div>
      </div>
    </div>
  </section>
</template>
