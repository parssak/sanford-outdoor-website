<template>
  <Header title='meet our team' />
  
  <!-- PeopleGrid -->
  <PeopleGrid 
    title="Management Team"




  />

<!-- PeopleGrid -->
  <PeopleGrid 
    title="Sales Team"




  />
</template>

<script>
import Header from "@/components/base/Header";
import PeopleGrid from "@/components/layouts/people/PeopleGrid.vue";

    

export default {
  components: {
    Header,
    PeopleGrid
  },
  
};
</script>
