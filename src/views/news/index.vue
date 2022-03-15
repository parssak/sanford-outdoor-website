<template>
  <Header title="latest company news" />

  <!-- BlogSignUp -->
  <BlogSignUp />
</template>

<script>
import Header from "@/components/base/Header";
import BlogSignUp from "@/components/layouts/blog/BlogSignUp.vue";

export default {
  components: {
    Header,
    BlogSignUp,
  },
};
</script>
