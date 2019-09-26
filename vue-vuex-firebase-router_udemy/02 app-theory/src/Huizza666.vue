<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <slot name="text"></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style lang='scss' scoped>
div {
  padding: 10px;
  border: 1px solid red;
}

h3, h5 {
  color: orange;
}
</style>
