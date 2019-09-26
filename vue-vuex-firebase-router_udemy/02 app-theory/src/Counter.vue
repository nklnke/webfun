<template>
  <div>
    <h2>counter: {{ counter }}</h2>
  </div>
</template>

<script>
import { eventEmitter } from './main'

export default {
  data () {
    return {
      counter: 0
    }
  },
  created () {
    eventEmitter.$on('counterUpdated', (n) => {
      this.counter += n
    })
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    margin-left: 100px;

    color: green;
  }
</style>
