<template>
  <div class="footer">
    <div class="flex flex-wrap">
      <div class="entryfirst">
        <i class="fab fa-github"></i> <Ref uri="https://github.com/doerfli/covid-numbers/">doerfli/covid-numbers</Ref>
      </div>
      <div class="entry">
        <i class="fab fa-twitter"></i> <Ref uri="https://twitter.com/doerfli">@doerfli</Ref>
      </div>
      <div class="entry">
        <i class="fas fa-database"></i> <Ref uri="https://github.com/openZH/covid_19">OpenZH/Covid19</Ref>
      </div>
      <div class="entry">
        <i class="fas fa-database"></i> <Ref uri="https://www.covid19.admin.ch">FOPH</Ref>
      </div>
      <div class="entrylast">
        <i class="fas fa-adjust"></i>&nbsp;
        <span class="link" v-if="isTheme('dark')" @click="toggleTheme()">Switch to light theme</span>
        <span class="link" v-if="isTheme('light')" @click="toggleTheme()">Switch to dark theme</span>
      </div>
    </div>
    <div class="disclaimer">
      <span>Disclaimer</span>:
      All data shown on this page is based on the data provided by <Ref uri="https://github.com/openZH/">OpenZH</Ref> and <Ref uri="https://www.covid19.admin.ch">FOPH</Ref>.
      Calculations are done to the best of my knowledge, but I do not guarantee correctness.
      <br/>
      If you find a mistake, I will be happy to fix it.
      Please bring it to my attention by raising an issue on the <Ref uri="https://github.com/doerfli/covid-numbers/">Github project</Ref> or contact me via <Ref uri="https://twitter.com/doerfli">Twitter</Ref>.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Ref from '@/components/base/Ref.vue'

@Component({
  components: { Ref }
})
export default class Footer extends Vue {

  private isTheme(theme: string) {
    return this.$store.state.viewProps.theme === theme;
  }

  private toggleTheme() {
    this.$store.dispatch("viewProps/toggleTheme");
  }

}
</script>

<style scoped lang="scss">
  .footer {
    @apply py-6;

    .entry {
      @apply px-3;
      @apply border-solid;
      @apply border-r-2;
      @apply border-gray-700 dark:border-gray-200;
    }
    .entryfirst {
      @apply pr-3;
      @apply border-solid;
      @apply border-r-2;
      @apply border-gray-700 dark:border-gray-200;
    }
    .entrylast {
      @apply pl-3;
    }
    .disclaimer {
      @apply pt-2;
      @apply text-sm;
      > span {
        @apply text-pink-600 dark:text-pink-500 font-bold;
      }
    }

    .link {
      @apply text-indigo-700 dark:text-blue-500;
      @apply cursor-pointer;
    }
  }
</style>

