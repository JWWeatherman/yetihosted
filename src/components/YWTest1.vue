<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 15: Send and Receive using bitcoin core</h2>
      <p>Send and receive a small amount to confirm your wallet is working correctly. After you have finished testing click <b>Next</b> to continue.</p>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-warning" type="submit" id="next" value="Next">
    </div>
    <wwg></wwg>
  </div>
</template>

<script>
import navbarwarm from './navbarwarm'
import wwg from './WWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Warm/Guide/step2'})
    }
  },
  components: {
    navbarwarm,
    wwg 
  }
}
</script>
