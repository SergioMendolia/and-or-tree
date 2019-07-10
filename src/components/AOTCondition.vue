<template>
  <div
    class="condition row"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <label class="col-md-3">
      <select v-model="condition.field" @change="resetCondition()">
        <option :value="null">-</option>
        <option :key="field" :value="field" v-for="field in getFields">{{
          getFieldLabel(field)
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
        v-if="getFieldType(condition.field) !== 'select'"
      />
      <Multiselect
        v-model="condition.value"
        v-else
        :multiple="isMultiple(condition.field)"
        label="name"
        track-by="id"
        :disabled="condition.filter === null"
        :options="getFieldValues(condition.field)"
      ></Multiselect>
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
import Multiselect from 'vue-multiselect';

export default {
  name: 'AOTCondition',

  components: {
    Multiselect,
  },

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
    getFieldLabel(field) {
      if (this.getFieldDefinitions[field].label !== undefined) {
        return this.getFieldDefinitions[field].label;
      }
      return field;
    },
    getFieldValues(field) {
      if (this.getFieldDefinitions[field] !== undefined) {
        return this.getFieldDefinitions[field].values;
      }
      return [];
    },
    getFieldType(field) {
      if (this.getFieldDefinitions[field] !== undefined) {
        return this.getFieldDefinitions[field].type;
      }
      return 'text';
    },
    isMultiple(field) {
      if (this.getFieldDefinitions[field] !== undefined) {
        return this.getFieldDefinitions[field].multiple;
      }
      return false;
    },
    resetCondition() {
      this.condition.filter = null;
      this.condition.value = null;
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
.multiselect {
  z-index: 999;
}
.multiselect__content-wrapper {
  z-index: 9999;
}
.multiselect__input {
  border: 0 !important;
}
</style>
