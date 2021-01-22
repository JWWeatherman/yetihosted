<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Step 15: Send and Receive using bitcoin core</h2>
      <p>Follow the below guide and send and recieve a small amount to confirm your keys are working correctly, Then click <b>Next</b>.</p>
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