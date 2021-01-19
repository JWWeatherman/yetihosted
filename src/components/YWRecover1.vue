<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Send and Receive using bitcoin core</h2>
      <p>Follow the bellow guide to learn how to send and recieve using bitcoin core. When you are finished click <b>Next</b> to erase your laptop.</p>
      <input v-on:click="click" class="btn btn-warning" type="submit" id="next" value="Next">
      <wwg></wwg>
    </div>
  </div>
</template>

<script>
import navbarwarm from './navbarwarm'
import wwg from './WWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Warm/Guide/step2R'})
    }
  },
  components: {
    navbarwarm,
    wwg
  }
}
</script>