<template>
  <Header title="our history" />

  <div class="md:py-28">
    <FullSplit
      :flipped="true"
      rightClass="h-full max-w-lg mx-auto lg:max-w-full rounded-xl lg:rounded-none lg:rounded-r-3xl overflow-hidden"
      leftClass="md:pl-12"
    >
      <template v-slot:left>
        <h2>How It Started</h2>
        <p class="text-lg max-w-md">
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur
          neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
          <br /><br />
          Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh
          vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
        </p>
        <ul class="mt-4">
          <li>Quis elit egestas venenatis mattis dignissim.</li>
          <li>Quis elit egestas venenatis mattis dignissim.</li>
          <li>Quis elit egestas venenatis mattis dignissim.ommodi</li>
        </ul>
        <h3 class="text-lg font-semibold tracking-wide mb-2 mt-4">How we're different</h3>
        <p>
          Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in
          volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem
          est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a
          platea auctor mi.
          <br /><br />
          Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus
          adipiscing lacus, eget. Nunc fermentum id tellus donec.
        </p>
      </template>
      <template v-slot:right>
        <img src="@/assets/history.png" class="h-full w-full object-cover" alt="map" />
      </template>
    </FullSplit>
  </div>
</template>

<script>
import FullSplit from "../../../components/layouts/FullSplit.vue";
import Header from "@/components/base/Header";
import Container from "@/components/layouts/Container.vue";

export default {
  components: {
    Header,
    Container,
    FullSplit,
  },
};
</script>
