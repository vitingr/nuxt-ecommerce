<template>
  <main-layout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-6 mt-12">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>

            <div v-if="true">
              <NuxtLink
                to="/address"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400"
              >
                <Icon name="mdi:plus" class="mr-2" size="18" />
                <span class="text-blue-500 hover:text-red-400"
                  >Update Address</span
                >
              </NuxtLink>

              <div class="pt-6 mt-2 border-t">
                <div class="underline text-lg pb-4">Delivery Address</div>

                <ul class="text-xs mt-4">
                  <li class="flex items-center gap-2 mt-1">
                    <div>Contact name:</div>
                    <div class="font-bold">TESTE</div>
                  </li>
                  <li class="flex items-center gap-2 mt-1">
                    <div>Address:</div>
                    <div class="font-bold">TESTE</div>
                  </li>
                  <li class="flex items-center gap-2 mt-1">
                    <div>Zip Code:</div>
                    <div class="font-bold">TESTE</div>
                  </li>
                  <li class="flex items-center gap-2 mt-1">
                    <div>City:</div>
                    <div class="font-bold">TESTE</div>
                  </li>
                  <li class="flex items-center gap-2 mt-1">
                    <div>Country:</div>
                    <div class="font-bold">TESTE</div>
                  </li>
                </ul>
              </div>
            </div>

            <NuxtLink
              v-else
              to="/address"
              class="flex items-center text-blue-500 hover:text-red-400"
            >
              <Icon name="mdi:plus" class="mr-2" size="18" />
              <span class="text-blue-500 hover:text-red-400">
                Add new Address
              </span>
            </NuxtLink>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CheckoutItem :product="product" />
            </div>
          </div>
        </div>

        <div class="md:hidden block my-4" />

        <div class="md:w-[35%] mt-12">
          <div id="PlaceOrder" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-semibold mb-2">Summary</div>

            <div class="flex items-center justify-between my-4">
              <div>Total Shipping</div>
              <div>Free</div>
            </div>

            <div class="border-t" />

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                R$ <span class="font-semibold">{{ total / 100 }}</span>
              </div>
            </div>

            <form @submit.prevent="pay()">
              <div
                class="border-2 border-gray-500 p-2 rounded-sm"
                id="card-element"
              />
              <p
                id="card-error"
                role="alert"
                class="text-red-700 text-center font-semibold"
              />

              <button
                :disabled="isProcessing"
                type="submit"
                class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
                :class="isProcessing ? 'opacity-70' : 'opacity-100'"
              >
                <Icon name="eos-icons:loading" v-if="isProcessing" />
                <div v-else>
                  Place Order
                </div>
            </button>
            </form>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">
              MercadoWeb
            </div>
            <p class="my-2">Mercadoweb keeps your information and payment safe</p>
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
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const route = useRoute();

const elements = null;
const card = null;
const form = null;
const total = ref(0);
const clientSecret = null;
const currentAddress = ref(null);
const isProcessing = ref(false);

onMounted(() => {
  isProcessing.value = true;

  userStore.checkout.forEach((item) => {
    total.value += item.price;
  });
});

const pay = () => {
  alert("O pagamento foi efetuado");
};

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
