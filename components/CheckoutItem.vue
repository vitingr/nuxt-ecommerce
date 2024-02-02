<template>
  <div class="flex justify-start my-2">
    <img class="rounded-md md:w-[150px] w-[90px]" :src="product.url" />

    <div class="overflow-hidden pl-2">
      <div class="flex items-center">
        <span
          class="bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"
          >Welcome Deal</span
        >
        <div class="truncate pl-2">
          {{ product.title }}
        </div>
      </div>

      <div class="text-lg mt-2">
        R$ <span class="font-semibold">{{ product.price / 100 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const props = defineProps(["product"]);
const { product } = toRefs(props);
</script>

<style lang="scss" scoped></style>
