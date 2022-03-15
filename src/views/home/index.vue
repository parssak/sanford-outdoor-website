<template>
  <!-- HeroImageCard -->
  <HeroImageCard>
    <template v-slot:title>
      <h3>Sanford Outdoor</h3>
      <h1>Taking Your Advertising To New Heights</h1>
      <p>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div class="flex space-x-3 mt-8">
        <button class="btn btn-xl">View Boards</button>
        <button class="btn btn-xl">Get in Touch</button>
      </div>
    </template>
  </HeroImageCard>

  <!-- Split -->
  <Split
    title="About Sanford Outdoor"
    description="Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi."
  >
  </Split>

  <!-- Container -->
  <Container>
    <h3>What We Do</h3>
    <h2>Our Boards</h2>
  </Container>

  <!-- Container -->
  <Container>
    <h2>View our work</h2>
  </Container>

  <!-- BlogSignUp -->
  <BlogSignUp />
</template>

<script>
import Header from "@/components/base/Header";
import HeroImageCard from "@/components/layouts/hero/HeroImageCard.vue";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";
import BlogSignUp from "@/components/layouts/blog/BlogSignUp.vue";

export default {
  components: {
    Header,
    HeroImageCard,
    Split,
    Container,
    BlogSignUp,
  },
};
</script>
