<template>
  <!-- HeroImageCard -->
  <HeroImageCard>
    <template v-slot:title>
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        <h3 class="support-text">Sanford Outdoor</h3>
        <h1>Taking Your Advertising To New Heights</h1>
        <p class="text-white mt-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <router-link to="/boards" class="btn btn-xl">View Boards</router-link>
          <router-link to="/contact" class="btn btn-xl btn-light">Get in Touch</router-link>
        </div>
      </div>
    </template>
  </HeroImageCard>

  <!-- Split -->
  <Split
    supportText="Who We Are"
    title="About Sanford <br class='hidden lg:block' /> Outdoor"
    description="Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi."
  >
    <img src="@/assets/orange-board.png" alt="" class="w-full h-full object-cover" />
    <template v-slot:extra-content>
      <router-link to="/about" class="btn btn-xl mt-4">Read More</router-link>
    </template>
  </Split>

  <!-- Container -->
  <div class="relative">
    <div class="absolute inset-0 w-full h-full object-cover">
      <img src="@/assets/red-board.png" alt="" class="w-full h-full object-cover" />
    </div>
    <Container>
      <div class="flex items-center flex-col">
        <h3 class="support-text-white">What We Do</h3>
        <h2 class="-mt-1">Our Boards</h2>
        <div class="grid gap-8 lg:grid-cols-3 mt-2">
          <BoardCard
            v-for="board in boards"
            :key="board.id"
            :title="board.title"
            :description="board.description"
          />
        </div>
        <router-link to="/boards" class="btn btn-xl btn-light mt-12">View All Boards</router-link>
      </div>
    </Container>
  </div>

  <!-- Container -->
  <Container>
    <h3 class="support-text">Real World Results</h3>
    <h2>View our work</h2>
    <div class="snap-x space-x-4 flex overflow-auto pb-2">
      <div
        class="
          overflow-hidden
          w-full
          md:w-3/4
          max-w-6xl
          snap-center
          md:h-full
          flex-shrink-0
          object-cover
        "
      >
        <img src="@/assets/red-board.png" alt="" class="w-full h-full object-cover" />
      </div>
      <div
        class="
          overflow-hidden
          w-full
          md:w-3/4
          max-w-6xl
          snap-center
          md:h-full
          flex-shrink-0
          object-cover
        "
      >
        <img src="@/assets/blog.png" alt="" class="w-full h-full object-cover" />
      </div>
      <div
        class="
          overflow-hidden
          w-full
          md:w-3/4
          max-w-6xl
          snap-center
          md:h-full
          flex-shrink-0
          object-cover
        "
      >
        <img src="@/assets/blog.png" alt="" class="w-full h-full object-cover" />
      </div>
      <div
        class="
          overflow-hidden
          w-full
          md:w-3/4
          max-w-6xl
          snap-center
          md:h-full
          flex-shrink-0
          full
          object
        "
      >
        <img src="@/assets/red-board.png" alt="" class="w-full h-full object-cover" />
      </div>
      <div
        class="
          overflow-hidden
          w-full
          md:w-3/4
          max-w-6xl
          snap-center
          md:h-full
          flex-shrink-0
          object-cover
        "
      >
        <img src="@/assets/blog.png" alt="" class="w-full h-full object-cover" />
      </div>
    </div>
  </Container>

  <!-- BlogBadges -->
  <BlogBadges supportText="Latest News" title="Recent Blog Posts" />
</template>

<script>
import BoardCard from "../../components/BoardCard.vue";
import Header from "@/components/base/Header";
import HeroImageCard from "@/components/layouts/hero/HeroImageCard.vue";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";
import BlogBadges from "@/components/layouts/blog/BlogBadges.vue";

const boards = [
  {
    id: "1",
    title: "Type of Board",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    id: "2",
    title: "Type of Board",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    id: "3",
    title: "Type of Board",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
];

export default {
  components: {
    Header,
    HeroImageCard,
    Split,
    Container,
    BlogBadges,
    BoardCard,
  },
  data() {
    return {
      boards,
    };
  },
};
</script>
