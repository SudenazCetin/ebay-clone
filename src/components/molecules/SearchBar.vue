<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const q = ref('')
const categories = [
  'All Categories', 'Electronics', 'Motors', 'Fashion', 'Collectibles and Art',
  'Sports', 'Health & Beauty', 'Industrial equipment', 'Home & Garden', 'Deals', 'Sell'
]
const selected = ref(categories[0])

const emit = defineEmits(['search'])

function submit() {
  // Buradan parent'a haber veriyoruz
  emit('search', { query: q.value, category: selected.value })
}
</script>

<template>
  <form @submit.prevent="submit" class="min-w-0 grid grid-cols-[1fr_auto] items-center gap-4">
    <!-- arama kutusu -->
    <div class="min-w-0 w-full flex items-stretch rounded-[36px] border border-black/80 bg-white overflow-hidden">
      <!-- büyüteç -->
      <div class="flex items-center pl-4 pr-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/>
        </svg>
      </div>
      <!-- input -->
      <BaseInput
        v-model="q"
        type="text"
        placeholder="Search for anything"
        class="min-w-0 flex-1 h-12 md:h-14 px-2 text-[15px] placeholder:text-gray-500 outline-none"
      />
      <!-- kategori -->
      <div class="hidden sm:flex items-center border-l border-gray-300">
        <select v-model="selected"
                class="h-12 md:h-14 pl-4 pr-10 bg-white outline-none text-[15px]">
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>
    </div>

    <!-- mavi buton -->
    <BaseButton
      type="submit"
      class="h-12 md:h-14 px-7 md:px-8 rounded-full bg-[#3665F3] text-white font-semibold
             hover:brightness-110 active:translate-y-px"
    >
      Search
    </BaseButton>
  </form>
</template>
