export default {
  fieldDefinitions: {
    fieldA: {
      filters: ['in', 'start', 'not in', 'end'],
      type: String,
    },
    fieldB: {
      filters: ['in', 'start', 'not in', 'end'],
      type: String,
    },
    fieldC: {
      filters: ['='],
      type: Number,
    },
  },

  root: {
    type: 'and',
    conditions: [{ field: null, value: null, filter: null }],
  },
};
