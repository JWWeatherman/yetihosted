<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Send and Receive using bitcoin core</h2>
      <p>Follow the bellow guide to learn how to send and recieve using bitcoin core. When you are finished click <b>Next</b> to erase your laptop.</p>
      <input v-on:click="click" class="btn btn-danger" type="submit" id="next" value="Next">
      <hwg></hwg>
    </div>
  </div>
</template>

<script>
import navbarhot from './navbarhot'
import hwg from './HWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Hot/Guide/step2R'})
    }
  },
  components: {
    navbarhot,
    hwg
  }
}
</script>