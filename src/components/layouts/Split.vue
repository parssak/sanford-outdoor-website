<template>
  <Container :class="dark && 'bg-accent-dark'">
    <div class="grid gap-x-8 gap-y-12 lg:grid-cols-2">
      <section :class="flip && `lg:order-1`" class="lg:py-12">
        <h3 class="support-text" v-if="supportText.length > 0">{{ supportText }}</h3>
        <h2 :class="dark && 'text-white'" v-html="title"></h2>
        <p class="text-grey"><span v-html="description"></span></p>
        <slot name="extra-content"></slot>
      </section>
      <section>
        <div class="split-img-wrapper w-full h-full rounded-xl overflow-hidden">
          <slot></slot>
        </div>
      </section>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";

export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    supportText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
