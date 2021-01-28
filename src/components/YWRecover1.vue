<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Send and Receive Using Bitcoin Core</h2>
      <p>Send and receive using bitcoin core. When you are finished click <b>Next</b> to erase your laptop.</p>
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
