<script setup>
defineProps({
  size: String,
});
</script>

<template>
  <a
    href="/"
    class="bg-black text-white px-4 py-3 rounded-full whitespace-nowrap"
  >
    <slot></slot>
  </a>
</template>
