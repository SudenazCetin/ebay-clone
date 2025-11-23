<!-- src/pages/Cart.vue -->
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  cartItems,
  changeQuantity,
  removeFromCart,
  clearCart
} from '@/stores/cartStore'
import BaseButton from '@/components/atoms/BaseButton.vue'

const router = useRouter()

// cartItems zaten reactive olduğu için kopya değil direkt referans
const items = cartItems

// Toplam adet
const totalCount = computed(() =>
  items.reduce((sum, item) => sum + item.quantity, 0)
)

// Toplam fiyat
const totalPrice = computed(() =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const goToHome = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-6">
      Shopping cart
    </h1>

    <!-- SEPET BOŞSA -->
    <div v-if="items.length === 0" class="text-center py-16">
      <p class="text-lg font-medium mb-4">
        Your cart is empty.
      </p>
      <p class="text-sm text-gray-600 mb-6">
        Add items to your cart to see them here.
      </p>
      <BaseButton
        class="bg-[#3665F3] text-white rounded-full h-10 px-6 text-sm hover:brightness-110"
        @click="goToHome"
      >
        Start shopping
      </BaseButton>
    </div>

    <!-- SEPETTE ÜRÜN VARSA -->
    <div v-else class="space-y-6">
      <div class="space-y-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex gap-4 border-b pb-4"
        >
          <!-- Ürün görseli -->
          <div class="w-24 h-24 flex-shrink-0 border rounded-md overflow-hidden">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Ürün bilgileri -->
          <div class="flex-1">
            <h2 class="text-sm font-semibold mb-1">
              {{ item.title }}
            </h2>

            <p class="text-sm text-gray-600 mb-2">
              Price: US ${{ item.price.toFixed(2) }}
            </p>

            <!-- Adet kontrol -->
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs text-gray-500 mr-2">Quantity:</span>

              <button
                class="border rounded-full w-7 h-7 flex items-center justify-center text-sm"
                @click="changeQuantity(item.id, -1)"
              >
                -
              </button>

              <span class="w-8 text-center text-sm">
                {{ item.quantity }}
              </span>

              <button
                class="border rounded-full w-7 h-7 flex items-center justify-center text-sm"
                @click="changeQuantity(item.id, 1)"
              >
                +
              </button>
            </div>

            <!-- Ürün kaldırma -->
            <button
              class="text-xs text-red-600 hover:underline"
              @click="removeFromCart(item.id)"
            >
              Remove
            </button>
          </div>

          <!-- Sağda toplam -->
          <div class="flex flex-col items-end justify-between text-right">
            <p class="text-sm font-semibold">
              US ${{ (item.price * item.quantity).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Alt toplam -->
      <div class="border-t pt-4 flex flex-col items-end gap-3">
        <div class="text-sm text-gray-700">
          Items: <span class="font-semibold">{{ totalCount }}</span>
        </div>

        <div class="text-lg font-semibold">
          Subtotal: US ${{ totalPrice.toFixed(2) }}
        </div>

        <div class="flex gap-3 mt-2">
          <BaseButton
            class="border border-gray-300 bg-white rounded-full h-10 px-5 text-sm hover:bg-gray-50"
            @click="clearCart"
          >
            Clear cart
          </BaseButton>

          <BaseButton
            class="bg-[#3665F3] text-white rounded-full h-10 px-6 text-sm hover:brightness-110"
          >
            Go to checkout
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
