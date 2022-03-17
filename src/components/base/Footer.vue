<template>
  <footer class="bg-dark text-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8 border-t-2 mt-8 border-grey">
      <div class="grid lg:grid-cols-2 gap-8">
        <router-link to="/">
          <img class="h-9 w-auto" src="@/assets/logo.svg" alt="Company Name" />
        </router-link>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 class="mb-3 text-lg font-semibold tracking-wide">Navigation</h3>
            <div class="space-y-1">
              <router-link
                v-for="route in navigation"
                :key="route.label"
                class="block with-underline w-max transition hover:text-accent capitalize text-grey"
                :to="route.path"
                >{{ route.label }}</router-link
              >
            </div>
          </div>
          <div>
            <h3 class="mb-3 text-lg font-semibold tracking-wide">Contact Us</h3>
            <div class="space-y-2">
              <address class="not-italic text-grey">
                700 Third Line, Suite 136 <br />
                Oakville, ON L6L 4B1
              </address>
              <a
                href="tel:+1-800-492-3451"
                class="block with-underline w-max text-accent hover:text-accent-hover"
                >Phone: +1-800-492-3451
              </a>
              <a
                href="mailto:info@sanfordoutdoor.com"
                class="block text-accent with-underline w-max hover:text-accent-hover"
                >Email: info@sanfordoutdoor.com</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 md:flex md:items-center md:justify-between">
        <p class="text-base text-grey-dark">&copy; 2022 Sanford Outdoor, All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
