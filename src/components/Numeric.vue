<template>
  <vue-numeric :decimal-separator="decimalSeparator||'.'" currency="Rp" separator="." :read-only="readOnly || true" :value="value" />
</template>
 
<script>
import VueNumeric from "vue-numeric";

export default {
  name: "App",

  components: {
    VueNumeric
  },
  props: ['value', 'decimalSeparator', 'readOnly']
};
</script>
