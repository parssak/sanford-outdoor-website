<template>
  <Container>
    <div class="relative">
      <div>
        <div v-if="supportText?.length > 0" class="support-text text-sm">{{ supportText }}</div>
        <div class="flex justify-between items-center mb-4">
          <h2 class="mb-0">
            {{ title }}
          </h2>
          <div class="hidden sm:inline-block">
            <router-link class="btn btn-xl h-max" to="/blog"> View All Posts </router-link>
          </div>
        </div>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="mt-4 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        <div v-for="post in posts" :key="post.title">
          <div>
            <a :href="post.category.href" class="inline-block">
              <span :class="[post.category.color, 'tag']">
                {{ post.category.name }}
              </span>
            </a>
          </div>
          <a :href="post.href" class="block mt-4">
            <p class="text-xl font-semibold text-white">
              {{ post.title }}
            </p>
            <p class="mt-3 text-base text-grey">
              {{ post.description }}
            </p>
          </a>
          <!-- <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a :href="post.author.href">
                <span class="sr-only">{{ post.author.name }}</span>
                <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a :href="post.author.href">
                  {{ post.author.name }}
                </a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="post.datetime">
                  {{ post.date }}
                </time>
                <span aria-hidden="true"> &middot; </span>
                <span> {{ post.readingTime }} read </span>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="grid place-items-center mt-12 sm:hidden">
        <router-link class="btn btn-xl h-max" to="/blog"> View All Posts </router-link>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container";
const defaultPosts = [
  {
    title: "Top 100 Billboard Placements",
    href: "/blog",
    category: {
      name: "Article",
      href: "/blog",
      color: "bg-accent text-white",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "/blog",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "Top 100 Billboard Placements",
    href: "/blog",
    category: { name: "Video", href: "/blog", color: "bg-accent text-white" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "/blog",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Top 100 Billboard Placements",
    href: "/blog",
    category: {
      name: "Case Study",
      href: "/blog",
      color: "bg-accent text-white",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "/blog",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];

export default {
  components: {
    Container,
  },
  props: {
    posts: {
      type: Array,
      default: () => defaultPosts,
    },
    title: {
      type: String,
      default: "Recent publications",
    },
    description: {
      type: String,
      default:
        "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    },
    supportText: {
      type: String,
      default: "",
    },
  },
};
</script>
