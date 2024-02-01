<template>
  <main-layout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product.id" class="mt-12">
          <ProductComponent :product="product" />
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
  {
    id: 3,
    title: "Samsung S24 Plus",
    description: "This is a description",
    url: "https://t.ctcdn.com.br/KaBwGxMTjoYaDAlTwC7xIonpxOc=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i847817.png",
    price: 8999,
  },
  {
    id: 4,
    title: "Samsung S24 Plus",
    description: "This is a description",
    url: "https://t.ctcdn.com.br/KaBwGxMTjoYaDAlTwC7xIonpxOc=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i847817.png",
    price: 8999,
  },
];
</script>

<style lang="scss" scoped></style>
