<template>
  <div
    class="
      bg-white
      py-6
      max-w-xs
      px-8
      rounded-lg
      md:rounded-2xl
      space-y-2
      flex flex-col
      items-center
    "
  >
    <img src="@/assets/board.svg" alt="" class="w-10 h-10" />
    <h3 class="text-black font-semibold text-xl">{{ title }}</h3>
    <p class="text-black text-center">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
