<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 15: Send and Receive using Bitcoin Core</h2>
      <p>Send and receive a small amount to confirm your wallet is working correctly. After you have finished testing click <b>Next</b> to continue.</p>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-danger" type="submit" id="next" value="Next">
    </div>
    <hwg></hwg>
  </div>
</template>

<script>
import navbarhot from './navbarhot'
import hwg from './HWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Hot/Guide/step2'})
    }
  },
  components: {
    navbarhot,
    hwg 
  }
}
</script>
