<template>
  <div :class="`group group__${group.type}`">
    <select v-model="group.type">
      <option value="or">OR</option>
      <option value="and">AND</option>
    </select>

    <ul v-if="hasGroups()">
      <template v-for="(subGroup, index) in getGroups()">
        <li :key="index" :class="`element element__${group.type}`">
          <AOTGroup :group.sync="subGroup" @remove="removeGroup(index)" />
        </li>
      </template>
    </ul>

    <ul>
      <li
        :class="`element element__${group.type}`"
        :key="index"
        v-for="(condition, index) in getConditions()"
      >
        <AOTCondition
          :condition.sync="condition"
          @remove="removeCondition(index)"
        />
      </li>
    </ul>

    <button @click="addGroup('or')">+ OR</button>
    <button @click="addGroup('and')">+ AND</button>
    <button @click="addCondition()" v-if="!hasGroups()">+ Condition</button>

    <button @click="$emit('remove')">-</button>
  </div>
</template>

<script>
import AOTCondition from './AOTCondition';
import Vue from 'vue';
import _ from 'lodash';

export default {
  name: 'AOTGroup',
  components: { AOTCondition },
  props: {
    group: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      emptyCondition: { field: null, filter: null, value: null },
    };
  },

  methods: {
    addCondition() {
      if (
        !this.group.hasOwnProperty('conditions') ||
        this.group.conditions.length === 0
      ) {
        Vue.set(this.group, 'conditions', [
          _.clone(this.emptyCondition),
          _.clone(this.emptyCondition),
        ]);
      } else {
        let conditions = this.group.conditions;
        conditions.push(_.clone(this.emptyCondition));
        Vue.set(this.group, 'conditions', conditions);
      }
    },

    addGroup(type) {
      let conditions = [];
      if (
        this.group.hasOwnProperty('conditions') &&
        this.group.conditions.length >= 0
      ) {
        conditions = this.group.conditions;
      }

      if (
        !this.group.hasOwnProperty('groups') ||
        this.group.groups.length === 0
      ) {
        Vue.set(this.group, 'groups', [{ type, conditions }, { type }]);
      } else {
        let groups = this.group.groups;
        groups.push({ type, conditions });

        Vue.set(this.group, 'groups', groups);
      }
      Vue.set(this.group, 'conditions', []);
    },
    removeGroup(group) {
      if (this.group.groups.length <= 2) {
        Vue.set(this.group, 'groups', []);
      } else {
        Vue.delete(this.group.groups, group);
      }
    },
    removeCondition(condition) {
      if (this.group.conditions.length <= 2) {
        Vue.set(this.group, 'conditions', []);
      } else {
        Vue.delete(this.group.conditions, condition);
      }
    },
    hasGroups() {
      return (
        this.group.hasOwnProperty('groups') && this.group.groups.length > 0
      );
    },
    getGroups() {
      if (this.hasGroups()) {
        return this.group.groups;
      }
      return {};
    },
    hasConditions() {
      return this.group.hasOwnProperty('conditions');
    },
    getConditions() {
      if (this.hasConditions()) {
        return this.group.conditions;
      }
      return {};
    },
  },
};
</script>

<style lang="scss">
.group {
  position: relative;
  padding: 10px;
  margin: 10px;
  border-left: 4px solid transparent;
  background-color: white;
  &__or {
    border-color: green;
    &:hover {
      background-color: rgba(0, 255, 0, 0.2);
    }
  }
  &__and {
    border-color: blue;
    &:hover {
      background-color: rgba(0, 0, 255, 0.2);
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  > select {
    position: absolute;
    left: -5px;
    top: -5px;
  }
  .element {
    margin: 0;
    padding: 0;
    &:after {
      color: #555;
      font-size: 0.7em;
      width: 100%;
      display: block;
      text-align: center;
      opacity: 0.5;
    }
    &__or {
      &:after {
        content: 'or';
      }
    }
    &__and {
      &:after {
        content: 'and';
      }
    }
    &:last-of-type {
      &::after {
        content: '';
      }
    }
  }
}
</style>
