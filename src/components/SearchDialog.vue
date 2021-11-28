<template>
  <v-dialog :fullscreen="$vuetify.breakpoint.smAndDown" max-width="400" v-model="dialog">
    <v-card>
      <v-card-title>
        <span class="title font-weight-light">
          <div class="headline">Место поиска</div>
        </span>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          @keyup="change"
          v-model="search"
          label="Введите здесь..."
          append-icon="mdi-magnify"
          clearable
        ></v-text-field>
        <v-list two-line v-if="result.length">
          <v-list-item
            @click="$emit('PLACE_SELECTED', item)"
            v-for="(item, idx) in result"
            :key="idx"
          >
            <v-list-item-content>
              <v-list-item-title>
                <span v-if="item['Провинция/штат']">
                  {{ item['Провинция/штат'] }}
                </span>
                <span v-else>
                  {{ item['Страна/регион'] }}
                </span>
              </v-list-item-title>
              <v-list-item-subtitle v-show="item['Провинция/штат']">
                {{ item['Страна/регион'] }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div v-else>
          {{ resultText }}
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue2Filters from 'vue2-filters';

export default {
  props: ['data'],
  data: () => ({
    dialog: false,
    search: null,
    result: [],
    resultText: 'Результат отобразится здесь.'
  }),
  methods: {
    change($e) {
      const { value } = $e.target;

      if (!value) return;

      this.result = this.filterBy(this.data, $e.target.value, 'Страна/регион', 'Провинция/штат');

      if (!this.result.length) {
        this.resultText = 'Страна/регион или провинция/штат не найдены.';
      }
    }
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.result = [];
        this.resultText = 'Результат отобразится здесь.';
        this.search = null;
      }
    },
    search(val) {
      if (!val) {
        this.result = [];
        this.resultText = 'Результат отобразится здесь.';
      }
    }
  },
  mixins: [Vue2Filters.mixin]
};
</script>
