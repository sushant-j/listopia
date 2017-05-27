<template src="./home.html"></template>

<script>
import router from '@/router'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello World!',
      list: [
        {
          'name': 'List Item',
          'desc': 'Something something'
        },
        {
          'name': 'List Item',
          'desc': 'Something something'
        },
        {
          'name': 'List Item',
          'desc': 'Something something'
        }
      ]
    }
  },
  methods: {
    goToItem: function (index) {
      console.log(index)
      // router.push({ name: 'user', params: { userId: 123 }})
      router.push({name: 'ItemDetailComponent', params: {itemId: index}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./home.scss"></style>
