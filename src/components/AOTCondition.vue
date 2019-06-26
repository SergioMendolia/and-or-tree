<template>
  <div class="condition row" @mouseover="hover = true"
       @mouseleave="hover = false">
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
    <div class="toolbar" v-if="hover">
      <div class="toolbar__item item--show tooltip" @click="$emit('remove')">
        DELETE
      </div>
      <div class="toolbar__item item--show tooltip" @click="$emit('addor')">
        +OR
      </div>
      <div class="toolbar__item item--show tooltip" @click="$emit('addand')">
        +AND
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AOTCondition',

  data() {
    return {
      hover: false,
    };
  },

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
