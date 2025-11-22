<!-- src/App.vue -->
<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from '@/components/organisms/HeaderBar.vue'
import FooterBar from '@/components/organisms/FooterBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#f5f5f5]">
    <!-- Her sayfada header -->
    <HeaderBar />

    <!-- Route içeriği -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Her sayfada footer -->
    <FooterBar />
  </div>
</template>
