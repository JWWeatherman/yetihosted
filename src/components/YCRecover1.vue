<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Send and Receive using bitcoin core</h2>
      <p>Follow the bellow guide to learn how to send and recieve using bitcoin core. When you are finished click <b>Next</b> to erase your laptop.</p>
      <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
      <cwg></cwg>
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
import cwg from './CWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Cold/Guide/step2R'})
    }
  },
  components: {
    navbarcold,
    cwg
  }
}
</script>