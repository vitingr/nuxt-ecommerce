<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white">
    <div
      class="w-full flex items-center justify-center p-5 border-b border-b-gray-300"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <h1 class="flex items-center p-6">
          <span class="font-bold text-yellow-500 text-2xl"> Mercado </span>
          <span class="font-bold text-red-500 text-2xl"> Web </span>
        </h1>
      </NuxtLink>
    </div>

    <div class="max-w-[400px] mx-auto px-2 auth-menu">
      <div class="text-center my-6">Login / Register</div>

      <button
        @click="login('google')"
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
      >
        <img class="h-[30px] w-[30px]" src="/google-logo.png" />
        <div>Google</div>
      </button>

      <button
        @click="login('github')"
        class="mt-4 flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
      >
        <img class="h-[30px] w-[30px]" src="/github-logo.png" />
        <div>Github</div>
      </button>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    return navigateTo('/')
  }
})

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    redirectTo: window.location.origin
  })
}
</script>

<style lang="scss" scoped></style>
