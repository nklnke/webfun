<template>
  <div>
    <h2>Миксины</h2>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name in filterNames" v-bind:key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import listMixin from './listMixin';

export default {
  mixins: [listMixin]
}
</script>

<style lang="scss" scoped>

</style>
