<template>
   <!-- eslint-disable  -->
  <Header />
  <router-view></router-view>
  <Footer />

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    
  }
}
</script>
