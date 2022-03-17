<template>
  <div class="relative">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="imageSrc" alt="" />
      <!-- <div class="absolute inset-0  mix-blend-multiply" aria-hidden="true" /> -->
    </div>
    <Container>
      <div class="py-8 md:py-0">
        <h3 class="support-text">Sanford Outdoor</h3>
        <h1 class="text-4xl text-white sm:text-5xl capitalize lg:text-6xl">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-6 text-xl text-indigo-100 max-w-3xl">
          {{ description }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
export default {
  components: { Container },
  name: "Header",
  props: {
    title: String,
    description: String,
  },
  // onMount determine imageSrc
  computed: {
    imageSrc() {
      switch (this.$route.path) {
        case "/about":
          return "/sanford-outdoor-website/banner/about-banner.png";
        case "/blog":
          return "/sanford-outdoor-website/banner/blog-banner.png";
        case "/boards":
          return "/sanford-outdoor-website/banner/boards-banner.png";
        case "/contact":
          return "/sanford-outdoor-website/banner/contact-banner.png";
        case "/history":
          return "/sanford-outdoor-website/banner/history-banner.png";
        case "/news":
          return "/sanford-outdoor-website/banner/news-banner.png";
        case "/team":
          return "/sanford-outdoor-website/banner/team-banner.png";
        default:
          return "/sanford-outdoor-website/banner/about-banner.png";
      }
    },
  },
};
</script>
