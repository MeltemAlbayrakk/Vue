<template>
    <div id="homepage">
    
    </div>
   <Navbar></Navbar>
   
<Sidebar></Sidebar>
 <Content></Content>
</template>

<script>
import Sidebar from '../layouts/Sidebar.vue'
import Navbar from '../layouts/Navbar.vue'
import Content from '../layouts/Content.vue'

export default{
    name:"Homepage",
    components:{
        Sidebar,
        Content,
        Navbar,
    },
    data:()=>{
        return{
        message:"selam ben meltem",
        name:''
            }
    },methods:{
    printMessage(){
      console.log(this.name)
    }
  }
}
</script>
<style >
</style>