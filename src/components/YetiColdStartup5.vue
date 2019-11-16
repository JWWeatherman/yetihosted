<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 5: CHOOSE MODE RECOVERY OR REG</h2>
      <div class="hero-unit">
          <h1>Setup Yeti Cold Storage</h1>
          <p>Select this option if you want to create a new place to store bitcoin.</p>
          <p>
            <input v-on:click="start" style="margin-bottom:50px;" class="btn btn-danger btn-large" type="submit" id="next" value="Learn more">
          </p>
      </div>
      <div class="hero-unit">
          <h1>Recover Bitcoin from Yeti Cold Storage</h1>
          <p>Select this option if you want to spend bitcoin out of your existing Yeti Cold Storage location and you have 3 of your 7 seed packets.</p>
          <p>
            <input v-on:click="recover" style="margin-bottom:50px;" class="btn btn-danger btn-large" type="submit" id="next" value="Learn more">
          </p>
      </div>
    </div>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
    start () {
      this.$router.push({path: '/Cold/step6'})
    },
    recover () {
      this.$router.push({path: '/Cold/Recovery/step6'})
    }
  },
  computed: {
  },
  name: 'Step5',
  data () {
    return {
      msg: 'Convert your passphrase key to a WIF private key'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>