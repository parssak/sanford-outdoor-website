<template>
  <main class="relative">
    <div class="max-w-7xl mx-auto sm:p-6">
      <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img src="@/assets/hero.png" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <div class="text-center">
            <slot name="title"></slot>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Button from "@/components/base/Button.vue";
export default {
  components: { Button },
};
</script>
