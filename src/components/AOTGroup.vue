<template>
  <div :class="getGroupClasses()">
    <div class="row">
      <div class="col-md-1">
        <div class="toolbar toolbar--vertical" v-if="getConditions().length>1 || hasGroups()">
          <div class="toolbar__item item--show" @click="toggleActions()">
            <i class="icon icon-053-more" aria-hidden="true"></i>
          </div>
        </div>
        <div class="drop" v-if="actionsDisplayed" @mouseleave="hideActions()">
          <div class="toolbar toolbar--vertical">
            <div class="toolbar__item item--show tooltip" @click="addCondition()" v-if="!hasGroups()">
              <i class="icon icon-075-save-2" aria-hidden="true"></i>
            </div>
            <div class="toolbar__item item--show tooltip" @click="toggleType()" v-if="hasGroups() || hasConditions()" aria-label="Switch operator">
              <span class="text-uppercase">{{ group.type }}</span>
            </div>
            <div v-if="removable" class="toolbar__item item--show tooltip" @click="$emit('remove')" aria-label="Remove">
              <i class="icon icon-202-clear-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-11">
        <ul v-if="hasGroups()">
          <template v-for="(subGroup, index) in getGroups()">
            <li :key="index" :class="`element element__${group.type}`">
              <AOTGroup :group.sync="subGroup" @remove="removeGroup(index)" @empty="empty(subGroup)" />
            </li>
          </template>
        </ul>
        <ul>
          <li :class="`element element__${group.type}`" :key="index" v-for="(condition, index) in getConditions()">
            <AOTCondition :condition.sync="condition" @remove="removeCondition(index)" @addand="addToGroup(index, 'and')" @addor="addToGroup(index, 'or')" />
          </li>
        </ul>
        <div @click="addCondition()" v-if="!hasGroups()" class="add-condition">
          +
        </div>
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

    addCondition(condition = null) {
      if (condition === null) {
        condition = _.clone(this.emptyCondition);
      }

      if (!this.group.hasOwnProperty('conditions') || this.group.conditions.length === 0) {
        Vue.set(this.group, 'conditions', [condition]);
      } else {
        let conditions = this.group.conditions;
        conditions.push(_.clone(this.emptyCondition));
        this.group.conditions = conditions;
      }

      this.hideActions();
    },

    addGroup(type, conditions) {

      if(this.hasGroups()) {
        let groups = this.getGroups();
        groups.push({ type, conditions });
        Vue.set(this.group, 'groups', groups);
      } else {
        let groups = [{ type, conditions }, { type: this.group.type, conditions: this.getConditions() }];
        Vue.set(this.group, 'groups', groups);
        Vue.delete(this.group, 'conditions');
      }
      this.hideActions();
    },

    removeGroup(group) {
      if (this.group.groups.length <= 1) {
        Vue.set(this.group, 'groups', []);
        this.addCondition();
      } else {
        Vue.delete(this.group.groups, group);
      }
      if (this.getGroups().length <= 1 && !this.hasConditions()) {
        this.$emit('empty');
      }
    },

    empty(group) {
      const conditions = group.conditions;

      if(conditions !== undefined) {
        for (let i = 0; i < conditions.length; i++) {
          this.addCondition(conditions[i]);
        }
      }

      this.removeGroup(group);
    },

    removeCondition(condition) {
      //If there is only no condition left (after removal), we remove the group.
      if (this.group.conditions.length <= 1) {
        this.$emit('remove');
        //If the group is not removable, we replace the condition with an empty one
        if (!this.removable) {
          Vue.delete(this.group.conditions, condition);
          this.addCondition();
        }
      } else {
        Vue.delete(this.group.conditions, condition);
      }
      if(this.getGroups().length<=1) {
        this.$emit('empty');
      }
    },

    addToGroup(conditionIndex, groupType) {
        if(this.getConditions().length===1) {
            this.group.type=groupType;
            this.addCondition();
        } else {
            let remainingConditions = _.clone(this.group.conditions);
            let condition = remainingConditions.splice(conditionIndex, 1);
            condition = condition[0];
            Vue.set(this.group, 'conditions', remainingConditions);
            this.addGroup(groupType, [condition, _.clone(this.emptyCondition)]);
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
      return [];
    },

    hasConditions() {
      return this.group.hasOwnProperty('conditions') && this.group.conditions.length > 0;
    },

    getConditions() {
      if (this.hasConditions()) {
        return this.group.conditions;
      }
      return [];
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
  padding: 0 3px;
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
  .input-field {
    margin-bottom: 0;
  }
  .add-condition {
    background-color: black;
    color: white;
    width: 16px;
    height: 16px;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    border-radius: 100%;
    cursor: pointer;
    margin: auto;
  }
  &__or {
    border-color: green;
    .add-condition {
      background-color: green;
    }
  }
  &__and {
    border-color: blue;
    .add-condition {
      background-color: blue;
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
