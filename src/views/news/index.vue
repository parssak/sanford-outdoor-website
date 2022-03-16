<template>
  <Header title="latest company news" />

  <Container class="md:-mt-4">
    <div class="grid gap-8 md:grid-cols-2">
      <router-link v-for="post in posts" :key="post.title" :to="post.href" class="group">
        <h2 class="text-lg text-white mb-2">{{ post.title }}</h2>
        <p class="text-base text-grey max-w-md mb-2">{{ post.description }}</p>
        <router-link
          :to="post.href"
          class="
            tracking-widest
            text-sm
            uppercase
            text-accent
            group-hover:underline
            flex
            items-center
          "
          >Read More <ArrowRightIcon class="w-4 h-4 ml-2" />
        </router-link>
      </router-link>
    </div>
    <div class="todo mt-8">Pagination</div>
  </Container>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import BlogSignUp from "@/components/layouts/blog/BlogSignUp.vue";
import { ArrowRightIcon } from "@heroicons/vue/outline";

const defaultPosts = [
  {
    title: "Billboard News Post",
    href: "/news/details",
    category: { name: "Article", href: "/news/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "/news/details",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Billboard News Post",
    href: "/news/details",
    category: { name: "Video", href: "/news/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "/news/details",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Billboard News Post",
    href: "/news/details",
    category: { name: "Case Study", href: "/news/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "/news/details",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Billboard News Post",
    href: "/news/details",
    category: { name: "Case Study", href: "/news/details" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "/news/details",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default {
  components: {
    Header,
    BlogSignUp,
    Container,
    ArrowRightIcon,
  },
  data() {
    return {
      posts: defaultPosts,
    };
  },
};
</script>
