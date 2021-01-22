<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 32: Send and Receive using bitcoin core</h2>
      <p>Send and receive a small amount to confirm your wallet is working correctly. After you have finished testing click <b>Next</b> to continue.</p>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
    <cwg></cwg>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
import cwg from './CWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Cold/Guide/step2'})
    }
  },
  components: {
    navbarcold,
    cwg
  }
}
</script>
