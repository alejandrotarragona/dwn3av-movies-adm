<template>
  <v-app>
  
    <v-main>  
      <NavbarVue />
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import NavbarVue from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Footer,
    NavbarVue

  },

  data: () => ({
    //
  }),
};
</script>