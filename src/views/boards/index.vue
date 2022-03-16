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
  <Container>
    <h3 class="support-text">Our Work</h3>
    <h2>Get Inspired</h2>
    <div class="todo">Carousel</div>
  </Container>
</template>

<script>
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
  },
  data() {
    return {
      boards,
    };
  },
};
</script>
