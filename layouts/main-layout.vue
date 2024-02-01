<template>
  <div>
    <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
      <ul
        class="flex items-center xl:justify-center justify-end text-xs px-2 h-16 bg-[#FAFAFA] w-full"
      >
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
        >
          Sell on MercadoWeb
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
        >
          Cookie Preference
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
        >
          Help
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
        >
          Buyer Protection
        </li>
        <li class="px-3 hover:text-[#FF4646] cursor-pointer">
          <Icon name="ic:sharp-install-mobile" size="17"></Icon>
          App
        </li>
        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative flex items-center px-2.5 hover:text-[#FF4646] h-full cursor-pointer"
          :class="
            isAccountMenu
              ? 'bg-white border z-[40] shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
              : 'border border-[#FAFAFA]'
          "
        >
          <Icon name="ph:user-thin" size="17" class="ml-5" />
          <p class="ml-2">Account</p>
          <Icon name="mdi:chevron-down" size="15" class="ml-5" />

          <div
            id="AccountMenu"
            v-if="isAccountMenu"
            class="absolute bg-white w-[250px] z-40 top-[38px] -left-[100px] border-x border-b p-1"
          >
            <div v-if="true">
              <div
                class="font-semibold text-[15px] w-full text-center my-4 px-3"
              >
                Welcome to our shop!
              </div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/auth"
                  class="bg-[#FF4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
                >
                  Login / Register
                </NuxtLink>
              </div>
            </div>
            <div class="border-b mb-3 pt-3" />
            <ul class="bg-white">
              <li
                @click="navigateTo('/orders')"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
              >
                My Orders
              </li>
              <li
                v-if="true"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
              >
                Sign Out
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="mainHeader"
      class="flex lg:justify-start items-center justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <h1 class="flex items-center">
          <span class="font-bold text-yellow-500 text-2xl"> Mercado </span>
          <span class="font-bold text-red-500 text-2xl"> Web </span>
        </h1>
      </NuxtLink>

      <div class="w-full md:block hidden">
        <div class="relative">
          <div
            class="flex items-center border-2 border-[#ff4646] rounded-lg w-full"
          >
            <input
              class="w-full placeholder-gray-400 text-sm p-2 focus:outline-none rounded-lg"
              placeholder="Ex: Acessórios de computador"
              type="text"
              v-model="searchItem"
            />
            <Icon
              v-if="isSearching"
              name="eos-icons:loading"
              size="25"
              class="mr-2"
            />
            <button class="flex items-center h-[100%] p-2 bg-[#ff4646]">
              <Icon
                name="ph:magnifying-glass"
                class="white-icon"
                size="20"
                color="#ffffff"
              />
            </button>
          </div>

          <div class="absolute py-2 h-auto w-full">
            <div v-if="false" class="p-1 border-b border-slate-200 mb-2 pb-3">
              <NuxtLink
                to="`/item/1`"
                class="flex items-center justify-between w-full cursor-pointer p-2 rounded-lg hover:bg-gray-100"
              >
                <div class="flex items-center">
                  <img
                    class="rounded-md"
                    width="40"
                    src="https://t.ctcdn.com.br/KaBwGxMTjoYaDAlTwC7xIonpxOc=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i847817.png"
                  />
                  <div class="truncate ml-3">
                    <h1 class="font-semibold">Samsung S24 Plus</h1>
                    <p class="text-xs">Produto de testes do app</p>
                  </div>
                </div>
                <div class="truncate">R$8.999,99</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/shoppingcart" class="flex items-center">
        <button
          class="relative md:block hidden"
          @mouseenter="isCartHover = true"
          @mouseleave="isCartHover = false"
        >
          <span
            class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#FF4646] h-[17px] min-w-[17px] text-xs text-white px-1 rounded-full"
          >
            0
          </span>
          <div class="min-w-[40px]">
            <Icon name="ph:shopping-cart-simple-light" size="30" />
          </div>
        </button>
      </NuxtLink>

      <button
        @click="userStore.isMenuOverlay = true"
        class="sm:hidden block rounded-full p-2 -mt-[4px] hover:bg-gray-200"
      >
        <Icon name="radix-icons:hamburger-menu" size="30" />
      </button>
    </div>
  </div>

  <Loading v-if="userStore.isLoading" />

  <!-- <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" /> -->
  <slot />

  <Footer v-if="userStore.isLoading == false" />
</template>

<script setup>
import { ref } from "vue";
import {useUserStore} from "~/stores/user";

const userStore = useUserStore()

let isAccountMenu = ref(false);
let isSearching = ref(false);
let isCartHover = ref(false);
let searchItem = ref("");
</script>

<style lang="scss" scoped></style>
