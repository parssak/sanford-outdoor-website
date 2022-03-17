<template>
  <!-- <Header title="news/:news_id" /> -->

  <!-- BlogContent -->
  <!-- <BlogContent /> -->
  <Container>
    <h1>News Headline</h1>
    <div class="text-white my-6">
      Bill Board
      <span class="ml-4 text-grey">Mar 3, 2022 &middot; 6 min read</span>
    </div>
    <article>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa
        nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro
        non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus
        beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum
        quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum
        explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias
        recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis
        id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet!
        Commodi facilis tempora laudantium molestias voluptates labore in!
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut molestias ipsa
        nesciunt dicta voluptate, vel explicabo velit quibusdam fugiat, consequuntur quos nam porro
        non, molestiae dolor perspiciatis! Ab hic mollitia, perferendis quas officia possimus
        beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores quo sequi facere quasi cum
        quas, excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum, nostrum
        explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque vel molestias
        recusandae totam, quia, repudiandae iure sint enim perferendis officiis quaerat reiciendis
        id reprehenderit voluptatem. Fugiat enim id culpa impedit consequatur voluptate iste amet!
        Commodi facilis tempora laudantium molestias voluptates labore in!
      </p>
    </article>
    <div class="flex items-center justify-between text-grey mt-12">
      <router-link
        to="#"
        class="uppercase tracking-wider text-sm flex items-center hover:text-accent"
      >
        <ArrowNarrowLeftIcon class="w-4 h-4 mr-2" />
        PREVIOUS
      </router-link>
      <router-link
        to="#"
        class="uppercase tracking-wider text-sm flex items-center hover:text-accent"
      >
        NEXT
        <ArrowNarrowRightIcon class="w-4 h-4 ml-2" />
      </router-link>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import BlogContent from "@/components/layouts/blog/BlogContent.vue";
import { posts } from "@/data";
import { ArrowNarrowRightIcon, ArrowNarrowLeftIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Header,
    BlogContent,
    Container,
    ArrowNarrowRightIcon,
    ArrowNarrowLeftIcon,
  },
  data() {
    return {
      posts,
      item: posts.find((item) => item.id === this.$route.params.news_id),
    };
  },

  watch: {
    $route() {
      this.item = posts.find((item) => item.id === this.$route.params.news_id);
    },
  },
};
</script>
