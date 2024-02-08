<template>
  <div id="app"></div>
  
 <Homepage></Homepage>

</template>

<script>
import Homepage from './components/pages/Homepage.vue'

export default {



  name: 'App',
  components:{
    Homepage
  }, 
  async created() {
    try {
      this.message = await fetchMessage()
    }
    catch(error){
      this.message = 'server error :('
    }
  }

  
 
}
</script>

<style lang="scss">

</style>
