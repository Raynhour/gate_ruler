<template lang="pug">
div print: {{ print.text() }}
</template>

<script>
export default {
  props: {
    print: Object
  }
}
</script>
