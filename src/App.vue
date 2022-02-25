<template>
  <v-app id="inspire">
  <sitebar-manu/>
    <router-view />
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      
    }
    
  },
 components:{
'sitebar-manu': require ('@/components/Sitebarmanu/Sitebarmanu.vue').default,
  },
}
</script>
<style></style>
