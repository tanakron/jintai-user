<template>
  <div class="sitebarmanu">
        <v-app-bar
      app
      height="80px"
      absolute
      color="white"
      dark
      shrink-on-scroll
      src="https://ak.picdn.net/shutterstock/videos/7733182/thumb/2.jpg"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'blue darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="wite darken-1 ">
        <v-tab
          v-for="link in $store.state.links"
          :key="link.tile"
          :to="link.to"
        >
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>{{ link.icon }} </v-icon>
              {{ link.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="white darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>