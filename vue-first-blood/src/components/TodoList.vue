<template>
  <div class="todoList">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew"/>
    <li v-for="item in items" 
        :class="{finished: item.isFinished}"
        @click="toggleClick(item)" >
      {{item.label}}
    </li>
    <h1>listner-boy: {{ boyWords }}</h1>
    <component-a msgFromSuper='Baby I love you!' @listner-boy-emit="listne"></component-a>
  </div>
</template>

<script>
import Store from '../utils/store'
import ComponentA from './ComponentA'
export default {
  name: 'todoList',
  data () {
      return {
          msg: 'This is todoList',
          items: Store.fetch(),
          finishedClass: 'finished',
          newItem: '',
          boyWords: ''
      }
  },
  components: {ComponentA},
  methods: {
    toggleClick: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listne (msg) {
      this.boyWords = msg
    }
  },
  watch: {
    items: {
      handler (val, oldVal) {
        console.log(val, oldVal)
        Store.save(val)
      },
      deep: true
    }
  }
}
</script>

<style>
.finished{
  color: red;
}
</style>


