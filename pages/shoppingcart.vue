<template>
  <main-layout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        v-if="false"
        class="h-[500px] flex items-center justify-center pt-20"
      >
        <div class="">
          <img class="mx-auto" width="250" src="/assets/cart-empty.png" />
          <div class="text-xl text-center mt-4">No items yet?</div>

          <div v-if="true" class="flex text-center">
            <NuxtLink
              to="/auth"
              class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>

      <div v-else class="md:flex gap-4 justify-between mx-auto w-full pt-20">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">Shopping Cart (0)</div>
          </div>

          <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
            <div class="text-red-500 font-bold">
              Welcome Deal applicable on 1 item only
            </div>
          </div>

          <div id="Items" class="bg-white rounded-lg p-6 mt-4">
            <div v-for="product in products">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
        </div>

        <div class="md:hidden block my-4" />

        <div class="md:w-[35%]">
          <div id="Summary" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">
              Summary
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
const products = [
  {
    id: 1,
    title: "Samsung S24 Plus",
    description: "This is a description",
    url: "https://t.ctcdn.com.br/KaBwGxMTjoYaDAlTwC7xIonpxOc=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i847817.png",
    price: 8999,
  },
  {
    id: 2,
    title: "Samsung S24 Plus",
    description: "This is a description",
    url: "https://t.ctcdn.com.br/KaBwGxMTjoYaDAlTwC7xIonpxOc=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i847817.png",
    price: 8999,
  },
];
</script>

<style lang="scss" scoped></style>
