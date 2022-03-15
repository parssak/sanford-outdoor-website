<template>
  <Header title="news/:news_id" />

  <!-- BlogContent -->
  <BlogContent />
</template>

<script>
import Header from "@/components/base/Header";
import BlogContent from "@/components/layouts/blog/BlogContent.vue";
import { posts } from "@/data";

export default {
  components: {
    Header,
    BlogContent,
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
