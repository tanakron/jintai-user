<template>
  <div id="Stopwork">
    |
    <v-main class="blue lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <h2>Stopwork</h2>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
                 <v-menu bottom origin="center center" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              x-large
              fab
              class="text-center ma-10"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="workbuttoms in $store.state.workbuttom"
              :key="workbuttoms.title"
            >
              <v-list-item-title>{{ workbuttoms.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
          </v-col>
          
        </v-row>
   
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
