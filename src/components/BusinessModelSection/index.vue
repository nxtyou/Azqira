<script setup>
import ModelItem from "./ModelItem.vue";
import PartnersIcon from "../icons/PartnersIcon.vue";
import ArrowsIcon from "../icons/ArrowsIcon.vue";
import CommunityIcon from "../icons/CommunityIcon.vue";
import AzqiraIcon from "../icons/AzqiraIcon.vue";
</script>

<template>
  <section class="py-20 md:py-32 px-6">
    <div
      class="max-w-6xl mx-auto bg-cold-gray text-white text-center rounded-[2rem] py-16 px-6"
    >
      <div class="space-y-16 max-w-3xl mx-auto">
        <h2 class="font-bold text-4xl wow animate__animated animate__fadeInUp">
          Our business model briefly explained
        </h2>
        <div
          class="flex items-center flex-col md:flex-row space-y-8 md:space-y-0 justify-around wow animate__animated animate__fadeInUp"
        >
          <ModelItem
            heading="Partners"
            :items="['Divident payout', 'Profit sharing', 'Equity']"
          >
            <template #icon>
              <PartnersIcon />
            </template>
          </ModelItem>
          <ArrowsIcon class="rotate-90 md:rotate-0" />
          <ModelItem
            heading="AZQIRA"
            :items="['Divident payout', 'Profit sharing', 'Equity']"
          >
            <template #icon>
              <AzqiraIcon />
            </template>
          </ModelItem>
          <ArrowsIcon class="rotate-90 md:rotate-0" />
          <ModelItem
            heading="Community"
            :items="['Divident payout', 'Profit sharing', 'Equity']"
          >
            <template #icon>
              <CommunityIcon />
            </template>
          </ModelItem>
        </div>
      </div>
    </div>
  </section>
</template>
