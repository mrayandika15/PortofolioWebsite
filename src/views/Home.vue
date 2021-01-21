<template>
  <div class="home">

    <Header v-on:changeProfile="changeProfile"></Header>
    <Profile :hero="hero"></Profile>
    <Footer></Footer>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Profile from '../components/Profile.vue'

  export default {
    components: {
      Header,
      Footer,
      Profile
    },
    name: 'Home',
    data: function () {
      return {
        hero: {
          name: 'Rayandika',
          job: 'Front End',
          image: 'raka.jpeg'
        }
      }
    },
    methods: {
      changeProfile: function () {
        this.hero.name = "Ainayya";
        this.hero.job = "Backend"
        this.hero.image = 'ainayya.jpg'
      }
    }
  }
</script>
