<template>
  <div>
    <h2>name: {{ huizzaName }} / {{ reverseName }}</h2>
    <p>price: {{ huizzaPrice }}</p>

    <button @click="changeName">changeName</button>
    <button @click="changeFunc()">changeFunc</button>
    <button @click="updateCounter">update counter</button>
  </div>
</template>

<script>
import { eventEmitter } from './main';

export default {
  props: ['huizzaName', 'huizzaPrice', 'changeFunc'],
  methods: {
    changeName () {
      this.huizzaName = "sasai"
      this.$emit('nameChanged', this.huizzaName)
    },
    updateCounter () {
      eventEmitter.$emit('counterUpdated', 5)
    }
  },
  computed: {
    reverseName () {
      return this.huizzaName.split('').reverse().join('')
    }
  }
}
</script>

<style lang='scss'>
div {
  padding: 10px;
  border: 1px solid red;
}
</style>
