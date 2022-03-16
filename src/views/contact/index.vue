<template>
  <Header title="contact" />

  <FullSplit rightClass="h-full">
    <template v-slot:left>
      <h2>Get in touch</h2>
      <p class="text-lg max-w-md">
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
        Sapien tortor lacus arcu.
      </p>
      <h3 class="text-lg font-semibold tracking-wide mb-2 mt-4">Visit Us</h3>
      <address class="not-italic text-grey">
        700 Third Lane., Suite 136 <br />
        Oakville, ON L6L 4B1<br />
      </address>
      <div class="space-y-2 mt-4">
        <h3 class="text-lg font-semibold tracking-wide mb-2">Contact Information</h3>
        <div class="flex items-center">
          <!-- <MailIcon class="w-6 h-6 text-accent-light mr-2" /> -->
          <a href="mailto:info@sanfordoutdoor.com" class="underline text-accent"
            >info@sanfordoutdoor.com</a
          >
        </div>
        <div class="flex items-center">
          <!-- <PhoneIcon class="w-6 h-6 text-accent-light mr-2" /> -->
          <a href="tel:+1-800-492-3451" class="underline text-accent">+1-800-492-3451</a>
        </div>
      </div>
      <div class="mt-4">
        <h3 class="text-lg font-semibold tracking-wide mb-2">Office Hours</h3>
        <p class="text-grey">Monday to Friday: 9:00am - 5:00pm</p>
      </div>
      <!-- <div class="mt-4">
        <a href="" target="_blank">
          <img src="@/assets/facebook.svg" alt="facebook" class="w-6 h-6" />
        </a>
      </div> -->
    </template>
    <template v-slot:right>
      <img src="@/assets/map.png" class="h-full w-full object-cover" alt="map" />
    </template>
  </FullSplit>
</template>

<script>
import FullSplit from "../../components/layouts/FullSplit.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { PhoneIcon, MailIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Header,
    Container,
    FullSplit,
    PhoneIcon,
    MailIcon,
  },
};
</script>
