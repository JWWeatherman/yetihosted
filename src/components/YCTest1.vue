<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Step 30: Send and Receive using bitcoin core</h2>
      <p>Follow the bellow guide and send and recieve a small amount to confirm your keys are working correctly, Then click <b>Next</b>.</p>
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