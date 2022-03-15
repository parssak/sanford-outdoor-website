<template>
  <Header title='about us' />
  
  <!-- Split -->
  <Split 
    title="Who We Are"
description="Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. "
    :flip="true"

  >
    

  </Split>
</template>

<script>
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";

    

export default {
  components: {
    Header,
    Split
  },
  
};
</script>
