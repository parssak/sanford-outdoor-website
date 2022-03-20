<template>
  <Container class="overflow-hidden">
    <h3 class="support-text">Real World Results</h3>
    <h2 class="mb-0">{{ title }}</h2>
    <p v-if="description.length > 0" class="mt-4">{{ description }}</p>

    <div class="overflow-hidden w-full md:h-full flex-shrink-0 object-cover flex mt-12 ">
      <!-- Previous Image -->
      <div
        class="hidden sm:block w-full h-full absolute right-full object-cover bg-black"
        style="height: 40rem"
      >
        <img :src="images[prev]" class="w-full h-full object-cover opacity-50" @click="onPrev" />
      </div>

      <button
        class="
          bg-accent
          w-12
          h-12
          rounded-lg
          text-white
          absolute
          left-4
          md:left-12
          top-1/2
          grid
          place-items-center
        "
        @click="onPrev"
      >
        <ChevronLeftIcon class="w-6 h-6" />
      </button>

      <!-- Main Image -->
      <div class="w-full h-full object-cover" style="height: 40rem">
        <img :src="images[curr]" class="w-full h-full object-cover" />
      </div>

      <!-- Next Image -->
      <div
        class="hidden sm:block w-full h-full absolute left-full object-cover bg-black"
        style="height: 40rem"
      >
        <img :src="images[next]" class="w-full h-full object-cover opacity-50" @click="onNext" />
      </div>
      <button
        class="
          bg-accent
          w-12
          h-12
          rounded-lg
          text-white
          absolute
          right-4
          md:right-12
          top-1/2
          grid
          place-items-center
        "
        @click="onNext"
      >
        <ChevronRightIcon class="w-6 h-6" />
      </button>
    </div>
    <div class="grid place-items-center mt-8">
      <div class="flex space-x-2 items-center">
        <div
          v-for="(img, idx) in images"
          :key="img"
          :class="`w-3 h-3 rounded-full transition-all ${idx === curr ? 'bg-accent' : 'bg-white'}`"
          @click="jumpTo(idx)"
        />
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../Container.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";

export default {
  components: { Container, ChevronLeftIcon, ChevronRightIcon },
  data() {
    return {
      images: [
        "/sanford-outdoor-website/carousel/carousel-1.png",
        "/sanford-outdoor-website/carousel/carousel-2.png",
        "/sanford-outdoor-website/carousel/carousel-3.png",
      ],
      curr: 0,
      next: 1,
      prev: 2,
    };
  },
  props: {
    title: {
      type: String,
      default: "View our work",
    },
    description: {
      type: String,
      default: "",
    },
  },
  methods: {
    onNext() {
      this.prev = this.curr;
      this.curr = (this.curr + 1) % this.images.length;
      this.next = (this.curr + 1) % this.images.length;
    },
    onPrev() {
      this.next = this.curr;
      this.curr = (this.curr - 1 + this.images.length) % this.images.length;
      this.prev = (this.curr - 1 + this.images.length) % this.images.length;
    },
    jumpTo(idx) {
      this.prev = (idx - 1 + this.images.length) % this.images.length;
      this.curr = idx;
      this.next = (idx + 1 + this.images.length) % this.images.length;
    },
  },
};
</script>
