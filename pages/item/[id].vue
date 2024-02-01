<template>
  <main-layout>
    <div id="ItemPage" class="max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[40%] mt-12">
          <img
            v-if="currentImage"
            class="rounded-lg object-fit"
            :src="currentImage"
          />

          <div
            v-if="images[0] !== ''"
            class="flex items-center justify-center mt-2"
          >
            <div v-for="image in images">
              <img
                @mouseover="currentImage = image"
                @click="currentImage = image"
                width="70"
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                :src="image"
              />
            </div>
          </div>
        </div>
        <div class="md:w-[60%] bg-white p-6 rounded-lg mt-12">
          <div v-if="true">
            <p class="mb-2 font-semibold">Title</p>
            <p class="font-light text-[12px] mb-2">description Section</p>
          </div>

          <div class="flex items-center pt-2">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
              <Icon
                name="material-symbols:star-rounded"
                class="-mt-[17px]"
                size="12"
              />
            </span>
            <p class="text-[#FF5353]">Extra 5% off</p>
          </div>

          <div class="flex items-center justify-start my-2">
            <Icon name="material-symbols:star-rounded" class="red-icon" />
            <Icon name="material-symbols:star-rounded" class="red-icon" />
            <Icon name="material-symbols:star-rounded" class="red-icon" />
            <Icon name="material-symbols:star-rounded" class="red-icon" />
            <Icon name="material-symbols:star-rounded" class="red-icon" />
            <span class="text-[13px] font-light ml-2 mt-1"
              >5.213 Reviews | 1.000 + Orders</span
            >
          </div>

          <div class="border-b pb-2" />

          <div class="flex items-center justify-start gap-2 my-2 pt-2">
            <div class="text-xl font-bold">R$ {{ priceComputed }}</div>
            <span
              class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-2 rounded-sm"
            >
              70% off
            </span>
          </div>

          <p class="text-[#009A66] text-xs pt-1">
            Free 11-day delivery over R$8,28
          </p>

          <p class="text-[#009A66] text-xs pt-1">
            Free Shipping
          </p>

          <div class="py-2" />

          <button
            @click="addToCart()"
            :disabled="isInCart"
            class="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#FF851A] to-[#FFAC2C]"
          >
            <div v-if="isInCart" class="text-white">Is Added</div>
            <div v-else class="text-white">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
import {useUserStore} from '~/stores/user'
const userStore = useUserStore()

const route = useRoute()

let currentImage = ref(null);

onMounted(() => {
  watchEffect(() => {
    currentImage.value = "https://picsum.photos/id/77/800/800";
    images.value[0] = "https://picsum.photos/id/77/800/800";
  });
});

const isInCart = computed(() => {
  let res = false
  userStore.cart.forEach(prod => {
    if (route.params.id == prod.id) {
      res = true
    }
  })
  return res
})

const priceComputed = computed(() => {
  return "26.40";
});

const images = ref([
  "",
  "https://picsum.photos/id/212/800/800",
  "https://picsum.photos/id/233/800/800",
  "https://picsum.photos/id/165/800/800",
  "https://picsum.photos/id/99/800/800",
  "https://picsum.photos/id/144/800/800",
]);

const addToCart = () => {
  alert('Added')
}
</script>

<style lang="scss" scoped></style>
