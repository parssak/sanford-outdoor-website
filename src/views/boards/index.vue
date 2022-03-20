<template>
  <Header title="our boards" />

  <!-- Container -->
  <Container>
    <div class="mx-auto w-max md:w-auto">
      <div class="grid gap-8 md:grid-cols-3">
        <BoardCard
          v-for="board in boards"
          :key="board.id"
          :title="board.title"
          :description="board.description"
        />
      </div>
    </div>
  </Container>

  <!-- Container -->
  <Carousel
    title="Get inspired"
    description="Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet."
  />
  <!-- <Container>
    <h3 class="support-text">Our Work</h3>
    <h2 class="mb-4">Get Inspired</h2>
    <p class="text-grey mb-12">
      Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
    </p>
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
  </Container> -->
</template>

<script>
import Carousel from "../../components/layouts/features/Carousel.vue";
import BoardCard from "../../components/BoardCard.vue";
import Header from "@/components/base/Header";
import Container from "@/components/layouts/Container.vue";

const boards = [
  {
    title: "Standard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  // superboard
  {
    title: "Superboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    // series 10
    title: "Series 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    // coroplast
    title: "Coroplast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    // aluminum
    title: "Aluminum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    // vinyl
    title: "Vinyl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    // reflective
    title: "Reflective",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    // illuminated
    title: "Illuminated",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    // die cut
    title: "Die Cut",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
];

export default {
  components: {
    Header,
    Container,
    BoardCard,
    Carousel,
  },
  data() {
    return {
      boards,
    };
  },
};
</script>
