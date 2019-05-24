<template>
  <div id="app">
    <AOTGroup :group.sync="$root.$data.root" />
  </div>
</template>

<script>
import AOTGroup from './components/AOTGroup';

export default {
  name: 'app',
  components: {
    AOTGroup,
  },
};
</script>
