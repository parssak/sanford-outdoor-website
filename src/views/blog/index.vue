<template>
  <Header title="our blog" />

  <Container>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <router-link v-for="post in posts" :key="post.title" :to="post.href">
        <img
          class="object-cover h-48 w-full rounded-3xl overflow-hidden"
          src="@/assets/blog.png"
          alt=""
        />
        <!-- replace with :src="post.imageUrl" -->
        <span class="tag bg-accent text-white mt-4">Article</span>
        <h3 class="text-lg font-medium mt-4 mb-2 text-white">{{ post.title }}</h3>
        <p class="text-grey text-base">{{ post.description }}</p>
      </router-link>
    </div>
    <Pagination class="mt-8" />
  </Container>
</template>

<script>
import Pagination from "../../components/nav/Pagination.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
// import BlogThreeColumnCards from "@/components/layouts/blog/BlogThreeColumnCards.vue";

const defaultPosts = [
  {
    title: "Top 100 Billboard Placements",
    href: "/blog/details",
    category: { name: "Article", href: "/blog/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "@/assets/blog.png",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Top 100 Billboard Placements",
    href: "/blog/details",
    category: { name: "Video", href: "/blog/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "@/assets/blog.png",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Top 100 Billboard Placements",
    href: "/blog/details",
    category: { name: "Case Study", href: "/blog/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "@/assets/blog.png",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Top 100 Billboard Placements",
    href: "/blog/details",
    category: { name: "Article", href: "/blog/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "@/assets/blog.png",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Top 100 Billboard Placements",
    href: "/blog/details",
    category: { name: "Video", href: "/blog/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Top 100 Billboard Placements",
    href: "/blog/details",
    category: { name: "Case Study", href: "/blog/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default {
  components: {
    Header,
    Container,
    Pagination,
  },
  data() {
    return {
      posts: defaultPosts,
    };
  },
};
</script>
