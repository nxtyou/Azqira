<script setup>
defineProps({
  heading: String,
  items: Array,
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="bg-shark w-20 h-20 md:w-14 md:h-14 relative rounded-full">
      <slot name="icon"></slot>
    </div>
    <h3 class="font-bold text-shamrock text-2xl md:text-xl mt-3">
      {{ heading }}
    </h3>
    <ul
      class="md:list-disc flex md:flex-col items-center space-y-1 mt-2 text-silver"
    >
      <li v-for="(item, index) in items" :key="index" class="md:text-xs w-fit">
        <span class="md:hidden" v-if="index > 0">&#160;/</span> {{ item }}
      </li>
    </ul>
  </div>
</template>
