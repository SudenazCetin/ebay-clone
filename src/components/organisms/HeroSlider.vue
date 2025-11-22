<!-- src/components/organisms/HeroSlider.vue -->
<template>
  <div class="relative w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden bg-gray-200">

    <!-- SLIDES -->
    <div
      class="flex w-full h-full transition-transform duration-700"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full h-full relative"
      >
        <!-- IMAGE -->
        <img
          :src="slide.image"
          class="w-full h-full object-cover"
        />

        <!-- TEXT CONTENT -->
        <div class="absolute top-1/3 left-10 md:left-20 text-white drop-shadow-2xl">
          <h2 class="text-3xl md:text-5xl font-bold mb-3 max-w-xl">
            {{ slide.title }}
          </h2>

          <p class="text-lg md:text-xl mb-6 max-w-md">
            {{ slide.subtitle }}
          </p>

          <RouterLink
            :to="slide.link"
            class="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 shadow"
          >
            {{ slide.button }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- DOTS -->
    <div
      class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2"
    >
      <button
        v-for="(slide, i) in slides"
        :key="i"
        @click="activeIndex = i"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          activeIndex === i ? 'bg-white' : 'bg-white/40'
        ]"
      ></button>
    </div>

    <!-- CONTROLS -->
    <div class="absolute bottom-5 right-6 flex items-center gap-3">

      <!-- LEFT -->
      <button
        @click="prevSlide"
        class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow"
      >
        <span class="text-lg">&lt;</span>
      </button>

      <!-- RIGHT -->
      <button
        @click="nextSlide"
        class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow"
      >
        <span class="text-lg">&gt;</span>
      </button>

      <!-- PAUSE -->
      <button
        @click="togglePause"
        class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow"
      >
        <span v-if="isPaused" class="text-sm">▶</span>
        <span v-else class="text-lg">||</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* SLIDER DATA */
const slides = [
  {
    image: '/assets/Slider4.jpg',
    title: 'Sell to the world from Turkey',
    subtitle: 'Payments, shipping, playbooks — ready.',
    button: 'Get started',
    link: '/sell'
  },
  {
    image: '/assets/Slider1.jpg',
    title: 'Build an elite collection',
    subtitle: 'Choose your next adventure from thousands of finds.',
    button: 'Start your journey',
    link: '/collectibles'
  },
  {
    image: '/assets/Slider2.jpg',
    title: 'There’s a deal for you, too',
    subtitle: 'Don’t miss a chance to save.',
    button: 'Explore now',
    link: '/deals'
  },
  {
    image: '/assets/Slider3.jpg',
    title: 'All your faves are here',
    subtitle: 'Refresh your space, elevate your style and power your work.',
    button: 'Do your thing',
    link: '/faves'
  }
]

const activeIndex = ref(0)
const isPaused = ref(false)
let intervalId = null

/* AUTO SLIDE */
onMounted(() => {
  intervalId = setInterval(() => {
    if (!isPaused.value) {
      activeIndex.value = (activeIndex.value + 1) % slides.length
    }
  }, 3500)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const nextSlide = () =>
  (activeIndex.value = (activeIndex.value + 1) % slides.length)

const prevSlide = () =>
  (activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length)

const togglePause = () =>
  (isPaused.value = !isPaused.value)
</script>
