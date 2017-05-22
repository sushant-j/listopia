<template lang="html" src="./itemDetail.html">
</template>

<script>
export default {
  name: 'ItemDetailComponent',
  data () {
    return {
      createdMsg: 'Created the ItemDetailComponent',
      index: this.$route.params.itemId
    }
  }
}
</script>

<style lang="scss" src="./itemDetail.scss">
</style>
