<template>
  <div id="app">
    <nav style="position: fixed; top: 0; right: 0; height: 100%; width: 300px; padding: 30px; font-size: 50px; background-color: #fff">
      <!-- <h5><router-link to="/">home page</router-link></h5>
      <h5><router-link to="/huizzas">huizza page</router-link></h5> -->

      <!-- Чтобы активная ссылка выделялась -->
      <router-link to="/" active-class="active" exact><!-- tag="..." class="..." -->
      <!-- exact для точного совпадения пути для / -->
        <a>home page</a>
      </router-link>
      <router-link to="/huizzas" active-class="active">
        <a>huizzas page</a>
      </router-link>
    </nav>
    <router-view></router-view>

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

    <hr>
    <div>
      <h2>Директивы</h2>
      <h3 v-colored:color="'blue'">directive "colored" color</h3>
      <h3 v-colored:background="'red'">directive "colored" bgcolor</h3>
    </div>

    <hr>

    <div>
      <h2>Фильтры</h2>
      <h3>{{ title | uppercase }} / uppercase</h3>
      <h3>{{ title | slice }} / slice</h3>
      <h3>{{ title | slice | uppercase }} / uppercase + slice</h3>
    </div>

    <hr>

    <div>
      <h2>Фильтрация списков</h2>
      <input type="text" v-model="search">
      <ul>
        <li v-for="name in filterNames" v-bind:key="name">{{ name }}</li>
      </ul>
    </div>

    <hr>

    <app-list></app-list>

  </div>
</template>

<script>
import Huizza from './Huizza'
import Huizza666 from './Huizza666'
import Counter from './Counter'
import listMixin from './listMixin'

export default {
  name: 'app',
  data () {
    return {
      title: "title",
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
  },
  // Фильтр локально
  filters: {
    uppercase (val) {
      return val.toUpperCase()
    }
  },
  mixins: [listMixin]
}
</script>

<style lang="scss">
  .active {
    color: green;
  }
</style>
