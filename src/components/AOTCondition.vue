<template>
  <div class="condition row">
    <label class="col-md-3">
      <select v-model="condition.field">
        <option :value="null">-</option>
        <option :key="field" :value="field" v-for="field in getFields">{{
          field
        }}</option>
      </select>
    </label>
    <label class="col-md-3">
      <select v-model="condition.filter" :disabled="condition.field === null">
        <option :value="null">-</option>
        <option
          :key="field"
          :value="field"
          v-for="field in getFieldFilters(condition.field)"
          >{{ field }}</option
        >
      </select>
    </label>
    <label class="input-field col-md-3" data-init="auto">
      <input
        type="text"
        v-model="condition.value"
        :disabled="condition.filter === null"
      />
    </label>
    <div class="toolbar">
      <div
        class="toolbar__item item--disabled item--show tooltip"
        @click="$emit('remove')"
        aria-label="Remove condition"
      >
        <i class="icon icon-202-clear-circle" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AOTCondition',

  props: {
    condition: {
      type: Object,
    },
  },

  methods: {
    getFieldFilters(field) {
      if (this.getFieldDefinitions[field] !== undefined) {
        return this.getFieldDefinitions[field].filters;
      }
      return [];
    },
  },

  computed: {
    getFieldDefinitions() {
      return this.$root.$data.fieldDefinitions;
    },
    getFields() {
      return Object.keys(this.$root.$data.fieldDefinitions);
    },
  },
};
</script>
<style lang="scss">
.condition {
  width: 100%;
  label {
    width: 30%;
    display: inline-block;
    select,
    input {
      width: 100%;
      margin: 0 !important;
    }
  }
}
</style>
