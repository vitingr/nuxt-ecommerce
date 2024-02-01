<template>
  <div
    :id="`ProductComponent${product.id}`"
    class="bg-white inline-block p-2 rounded transition-all duration-200 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] cursor-pointer"
  >
    <NuxtLink :to="`/item/${product.id}`">
      <img class="rounded-t" :src="product.url" />
      <div id="ProductDetails">
        <span class="flex items-center justify-start gap-3 px-1 pt-1">
          <span class="text-[#FF6674] font-semibold"
            >R${{ priceComputed }}</span
          >
          <span class="text-gray-500 text-sm text-light line-through"
            >R${{ oldPriceComputed }}</span
          >
        </span>

        <span class="px-1 relative -top-2 text-[#FF6674] text-xs">
          Extra 5% off
        </span>

        <div class="flex items-center gap-1 px-1 relative -top-2">
          <span
            class="bg-[#FD374F] text-white text-[9px] font-semibold px-2 rounded-sm"
          >
            Welcome Deal
          </span>
          <span
            class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-2 rounded-sm"
          >
            Top Selling
          </span>
        </div>

        <p class="px-1 pt-1 text-xs">
          {{ product.title.substring(0, 60) }}
        </p>

        <p class="flex items-center px-1 pt-1 text-xs">
          5,000+ vendas -
          <Icon name="material-symbols:star-rounded" class="ml-2" />4.7
        </p>

        <p class="px-1 pb-1">
          <span class="text-[#009A66] text-xs font-semibold"
            >Free Shipping</span
          >
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const { product } = toRefs(props);

const priceComputed = computed(() => {
  return product.value.price / 100;
});

const oldPriceComputed = computed(() => {
  let res = (product.value.price + product.value.price / 20) / 100;
  return res.toFixed(2);
});
</script>

<style lang="scss" scoped></style>
