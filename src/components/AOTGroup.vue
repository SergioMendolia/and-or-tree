<template>
  <div :class="getGroupClasses()">
    <div class="row">
      <div class="col-md-1">
        <div class="toolbar toolbar--vertical">
          <button class="toolbar__item item--show" @click="toggleActions()">
            <i class="icon icon-053-more" aria-hidden="true"></i>
          </button>
        </div>
        <div class="drop" v-if="actionsDisplayed" @mouseleave="hideActions()">
          <div class="toolbar toolbar--vertical">
            <button
              class="toolbar__item item--show tooltip"
              @click="addGroup('and')"
              aria-label="Add group"
            >
              <i class="icon icon-028-folder-new" aria-hidden="true"></i>
            </button>
            <button
              class="toolbar__item item--show tooltip"
              @click="addCondition()"
              v-if="!hasGroups()"
              aria-label="Add condition in group"
            >
              <i class="icon icon-075-save-2" aria-hidden="true"></i>
            </button>
            <button
              class="toolbar__item item--show tooltip"
              @click="toggleType()"
              v-if="hasGroups() || hasConditions()"
              aria-label="Switch operator"
            >
              <span class="text-uppercase">{{ group.type }}</span>
            </button>
            <button
              v-if="removable"
              class="toolbar__item item--show tooltip"
              @click="$emit('remove')"
              aria-label="Remove"
            >
              <i class="icon icon-202-clear-circle" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-11">
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
      </div>
    </div>
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
    removable: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      emptyCondition: { field: null, filter: null, value: null },
      actionsDisplayed: false,
    };
  },

  methods: {
    getGroupClasses() {
      let classes = 'group ';

      classes = classes + `group__${this.group.type} `;

      return classes;
    },

    addCondition() {
      if (
        !this.group.hasOwnProperty('conditions') ||
        this.group.conditions.length === 0
      ) {
        Vue.set(this.group, 'conditions', [_.clone(this.emptyCondition)]);
      } else {
        let conditions = this.group.conditions;
        conditions.push(_.clone(this.emptyCondition));
        Vue.set(this.group, 'conditions', conditions);
      }
      this.hideActions();
    },

    addGroup(type) {
      let conditions = [_.clone(this.emptyCondition)];
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
      this.hideActions();
    },

    removeGroup(group) {
      if (this.group.groups.length <= 2) {
        Vue.set(this.group, 'groups', []);
      } else {
        Vue.delete(this.group.groups, group);
      }
    },

    removeCondition(condition) {
      if (this.group.conditions.length <= 1) {
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

    toggleActions() {
      this.actionsDisplayed = !this.actionsDisplayed;
    },

    toggleType() {
      if (this.group.type === 'or') {
        this.group.type = 'and';
      } else {
        this.group.type = 'or';
      }
      this.hideActions();
    },

    hideActions() {
      this.actionsDisplayed = false;
    },
  },
};
</script>

<style lang="scss">
.group {
  position: relative;
  padding: 2px;
  border-left: 3px solid transparent;
  background-color: white;
  &--hover {
    background-color: red;
  }
  .col-md-1 {
    max-width: none;
    padding-right: 0;
    flex: 0;
  }
  .drop {
    border: 1px solid #2e2e2e;
    background-color: white;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.28);
    position: absolute;
    border-radius: 5px;
    z-index: 999;
  }
  &__or {
    border-color: green;
  }
  &__and {
    border-color: blue;
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
