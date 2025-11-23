<!-- src/pages/Home.vue -->
<script setup>
import HeroSlider from '@/components/organisms/HeroSlider.vue'
import ProductSlider from '@/components/organisms/ProductSlider.vue'
import PromoBanner from '@/components/organisms/PromoBanner.vue'
import PromoBannerTop from '@/components/organisms/PromoBannerTop.vue'
import { products } from '@/data/products' 
import { products as featuredProducts } from '@/data/products'

const futureCategories = [
  {
    id: 'laptops',
    label: 'Laptops',
    image: '/assets/categories/product1.jpg',
  },
  {
    id: 'computer-parts',
    label: 'Computer parts',
    image: '/assets/categories/product2.jpg',
  },
  {
    id: 'smartphones',
    label: 'Smartphones',
    image: '/assets/categories/product3.jpeg',
  },
  {
    id: 'networking',
    label: 'Enterprise networking',
    image: '/assets/categories/product4.jpeg',
  },
  {
    id: 'tablets',
    label: 'Tablets and ebooks',
    image: '/assets/categories/product5.jpg',
  },
  {
    id: 'storage',
    label: 'Storage and blank media',
    image: '/assets/categories/product6.jpg',
  },
  {
    id: 'lenses',
    label: 'Lenses and filters',
    image: '/assets/categories/product7.jpg',
  },
]

const trendingCategories = [
  {
    id: 'trend1',
    label: 'Tech',
    image: '/assets/trending/trend1.jpg',
  },
  {
    id: 'trend2',
    label: 'Motors',
    image: '/assets/trending/trend2.jpg',
  },
  {
    id: 'trend3',
    label: 'Luxury',
    image: '/assets/trending/trend3.jpg',
  },
  {
    id: 'trend4',
    label: 'Collectibles and art',
    image: '/assets/trending/trend4.jpg',
  },
  {
    id: 'trend5',
    label: 'Home and garden',
    image: '/assets/trending/trend5.jpg',
  },
  {
    id: 'trend6',
    label: 'Trading cards',
    image: '/assets/trending/trend6.jpg',
  },
  {
    id: 'trend7',
    label: 'Health and beauty',
    image: '/assets/trending/trend7.jpg',
  },
]
</script>

<template>
  <div class="w-full">
    <!-- HERO SLIDER -->
    <section class="w-full px-3 md:px-8 lg:px-12">
      <HeroSlider />
    </section>

    <!-- PAGE CONTENT -->
    <div class="w-full px-3 md:px-8 lg:px-12 py-8 space-y-12">
      <!-- THE FUTURE IN YOUR HANDS -->
      <section class="px-4 py-8">
        <h2 class="text-xl font-semibold mb-4">The future in your hands</h2>

        <div
          class="flex gap-6 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible"
        >
          <div
            v-for="cat in futureCategories"
            :key="cat.id"
            class="flex flex-col items-center gap-2 min-w-[150px]"
          >
            <div
              class="w-[150px] h-[150px] md:w-[165px] md:h-[165px] rounded-full bg-[#d1d1d1]
                     flex items-center justify-center overflow-hidden"
            >
              <img
                :src="cat.image"
                :alt="cat.label"
                class="w-full h-full object-cover rounded-full"
              />
            </div>

            <span class="text-sm font-medium text-center">
              {{ cat.label }}
            </span>
          </div>
        </div>
      </section>

      <!-- TRENDING ON EBAY -->
      <section class="px-4 py-8">
        <h2 class="text-xl font-semibold mb-4">Trending on eBay</h2>

        <div
          class="flex gap-6 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible"
        >
          <div
            v-for="cat in trendingCategories"
            :key="cat.id"
            class="flex flex-col items-center gap-2 min-w-[150px]"
          >
            <div
              class="w-[150px] h-[150px] md:w-[165px] md:h-[165px] rounded-full bg-[#d1d1d1]
                     flex items-center justify-center overflow-hidden"
            >
              <img
                :src="cat.image"
                :alt="cat.label"
                class="w-full h-full object-cover rounded-full"
              />
            </div>

            <span class="text-sm font-medium text-center">
              {{ cat.label }}
            </span>
          </div>
        </div>
      </section>

      <!-- FEATURED PRODUCTS SLIDER (Öne Çıkanlar) -->
      <section>
        <ProductSlider
  title="Öne Çıkanlar"
  subtitle="Sana özel seçilen ürünler."
  :products="featuredProducts"
  :showPromoCard="true"
  category-id="car-truck-parts"
/>
      </section>

      <!-- Üst promo banner -->
      <section>
        <PromoBannerTop />
      </section>

      <!-- Alt promo banner -->
      <section>
        <PromoBanner />
      </section>
    </div>
  </div>
</template>
