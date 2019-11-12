<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
<<<<<<< HEAD
    <Footer v-if="$route.meta.flag"/>
=======
>>>>>>> master
  </div>
</template>
<script>

<<<<<<< HEAD
<script>
import Footer from "@common/components/footer"
export default {
  name: "App",
  components: {
    Footer
  }
}
</script>

<style lang="scss">
.page{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 0.66rem;
  padding-top: 0.44rem;
}
=======
</script>
<style lang="scss">

>>>>>>> master
</style>
