<script setup>
defineProps({
  size: String,
});
</script>

<template>
  <a
    href="/"
    class="block sm:w-fit bg-black text-white rounded-full whitespace-nowrap text-center"
    :class="[size === 'small' ? 'px-5 py-3' : 'px-20 py-4 w-full']"
  >
    <slot></slot>
  </a>
</template>
