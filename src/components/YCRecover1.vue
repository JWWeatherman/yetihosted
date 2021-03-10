<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Send and Receive Using Bitcoin Core</h2>
      <p>Send and receive using bitcoin core. When you are finished click <b>Next</b> to erase your laptop.</p>
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
