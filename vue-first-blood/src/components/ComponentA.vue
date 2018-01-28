<template>
  <div class="componentA">
    <h1>{{ msg }}</h1>
    <h1>{{ msgFromSuper }}</h1>
    <button @click="clickMe">clickMe</button>
    <button @click="clickMsgSuperByEmit">clickMsgSuperByEmit</button>
  </div>
</template>

<script>
export default {
  name: 'componentA',
  props: ['msgFromSuper'],
  data () {
    return {
      msg: 'componentA'
    }
  },
  methods: {
      clickMe () {
          console.log(this.msgFromSuper)
      },
      clickMsgSuperByEmit () {
          this.$emit('listner-boy-emit', 'gogogo')
      }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>