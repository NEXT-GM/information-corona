<template>
  <v-row>
    <v-col cols="12" md="4" class="d-flex flex-column justify-center align-center">
      <span :class="[count]"><ICountUp :endVal="infected" />261 636 136</span>
      <span :class="[title]">Заражённые</span>
    </v-col>
    <v-col cols="12" md="4" class="d-flex flex-column justify-center align-center">
      <span :class="[count]"><ICountUp :endVal="recovered" />235680259</span>
      <span :class="[title]">Выздоровело</span>
    </v-col>
    <v-col cols="12" md="4" class="d-flex flex-column justify-center align-center">
      <span :class="[count]"><ICountUp :endVal="deaths" /> 5 202 761</span>
      <span :class="[title]">Смерти</span>
    </v-col>
  </v-row>
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
  props: ['infected', 'recovered', 'deaths'],
  components: {
    ICountUp
  },
  computed: {
    count() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'display-2 font-weight-bold';
      }

      return 'display-1 font-weight-bold';
    },
    title() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'mt-4 title';
      }

      return 'mt-4 subtitle-1';
    }
  }
};
</script>
