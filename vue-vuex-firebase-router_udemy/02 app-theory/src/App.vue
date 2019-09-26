<template>
  <div id="app">
    <app-huizza
      v-bind:huizzaName="huizzaName"
      v-bind:huizzaPrice="huizzaPrice"
      v-bind:changeFunc="changeNameToHuizza"
      v-on:nameChanged="huizzaName = $event"
      @counterUpdated="counter = $event">
    </app-huizza>

    <hr>

    <Counter />

    <hr>

    <app-huizza666>
      <h3 slot="title">{{ huizzaName666 }}</h3>
      <h5 slot="title">(this is slot)</h5>
      <p slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officia quaerat.
        Voluptas officia, perferendis quos odit reprehenderit eveniet quo ipsum voluptate eum
        nulla labore deleniti corrupti consequuntur beatae suscipit hic.</p>
    </app-huizza666>

  </div>
</template>

<script>
import Huizza from './Huizza.vue'
import Huizza666 from './Huizza666.vue'
import Counter from './Counter';

export default {
  name: 'app',
  data () {
    return {
      huizzaName: 'Деревенская из App.vue',
      huizzaPrice: 303,
      huizzaName666: "Super-Huizza 666"
    }
  },
  methods: {
    changeNameToHuizza() {
      this.huizzaName = "HU IZ ZA"
    }
  },
  components: {
    appHuizza: Huizza,
    appHuizza666: Huizza666,
    Counter: Counter
  }
}
</script>

<style lang="scss">

</style>
