<template>
  <div>
    <v-card tile flat>
      <v-card-text class="d-flex justify-space-between">
        <v-row>
          <v-col
            cols="12"
            md="6"
            :class="[$vuetify.breakpoint.mdAndUp ? 'text-left' : 'text-center']"
          >
            References:
            <a
              class="no-decoration"
              href="https://bnonews.com/index.php/2020/01/timeline-coronavirus-epidemic/"
              target="_BLANK"
              >bnonews.com</a
            >

            <a
              class="no-decoration"
              href="https://www.worldometers.info/coronavirus/"
              target="_BLANK"
              >worldometers.info</a
            >
          </v-col>
          <v-col
            cols="12"
            md="6"
            :class="[$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center']"
          >
            <a @click.prevent="share" class="white--text no-decoration">Поделиться</a>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-snackbar bottom v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn color="red" text @click="snackbar.show = false">
        Закрыть
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isDarkTheme'])
  },
  data: () => ({
    snackbar: {
      show: false,
      text: null
    }
  }),
  methods: {
    async share() {
      if (navigator.share) {
        try {
          await navigator.share({
            text: 'Карта, данные и график распространения коронавируса (COVID-19) '
          });
          this.snackbar.text = 'Успешно делились.';
          this.snackbar.show = true;
        } catch (e) {
          // share cancelled
        }
      } else {
        this.snackbar.text = 'Не поддерживается.';
        this.snackbar.show = true;
      }
    }
  }
};
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
}
</style>
