<template>
  <div class="condition">
    <label>
      <select v-model="condition.field">
        <option :value="null">-</option>
        <option :key="field" :value="field" v-for="field in getFields">{{
          field
        }}</option>
      </select>
    </label>
    <label>
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
    <label>
      <input
        type="text"
        v-model="condition.value"
        :disabled="condition.filter === null"
      />
    </label>
    <button @click="$emit('remove')">-</button>
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
  }
  label,
  button {
    display: inline-block;
    padding: 3px;
    select,
    input {
      width: 100%;
    }
  }
  button {
    display: none;
  }
  &:hover {
    button {
      display: inline-block;
    }
  }
}
</style>
