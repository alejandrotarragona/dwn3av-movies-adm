<template>
    

<v-card 

    class="mx-auto"
    max-width="344"
  >
  <div class="mx-3">
    <h2>Sigueme</h2>

  </div>
    <v-img
      src="../assets/hola.png"
      height="200px"
    ></v-img>

    <v-card-title>
      Tercia Design
    </v-card-title>

    <v-card-subtitle>
      ¡sigueme en las redes!
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            <v-btn
          class="mx-2"
          fab
          dark
          small
          color="error"
           href="https://www.linkedin.com/in/alejandro-tercia/" target="_blank"
           >
          <v-icon dark>
           fab fa-linkedin
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="error"
          href="https://www.instagram.com/aletercia/" target="_blank"
        >
          <v-icon dark>
          fab fa-instagram
          </v-icon>
        </v-btn>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </template>
  <script>
  export default {
    data: () => ({
      show: false,
      return:{
        contact:[]
      }
    }),
  }
</script>