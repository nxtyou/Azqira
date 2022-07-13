<script setup>
import PrimaryButtonVue from "./PrimaryButton.vue";
import MenuIconVue from "./icons/MenuIcon.vue";
</script>
<template>
  <div
    class="flex items-center justify-between mx-auto space-x-4 py-6 px-6 max-w-7xl"
  >
    <img src="../assets/images/logo.svg" alt="AZQIRA" width="160" height="32" />
    <nav class="space-x-4 hidden md:block">
      <a href="/about" class="font-bold">About</a>
      <a href="/careers">Careers</a>
      <a href="/support">Support</a>
    </nav>
    <div class="space-x-4 hidden md:flex items-center">
      <a href="/">Login</a>
      <PrimaryButtonVue size="small"> Get started now</PrimaryButtonVue>
    </div>
    <button
      aria-label="Toggle Menu"
      class="md:hidden order-2 text-gray-500 w-10 h-10 relative focus:outline-none mr-6"
    >
      <MenuIconVue />
    </button>
  </div>
</template>
