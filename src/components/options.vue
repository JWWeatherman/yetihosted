<template>
     <div class="container" style="margin-top: 3rem;">
      <h2>What step are you on?</h2>
      <p>This document will walk you through setting up an DISCONNECTED laptop to generate and access your private keys and ONLINE laptop for getting updated transaction data from the bitcoin network.</p>
      <p class="mb-5">What device are you using to read this?</p>
      <form action="" method="post" class="mb-5">
        <input style="display: none;" name="option" value="start">
        <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="I'm just getting started">
      </form>
      <form action="" method="post" class="mb-5">
        <input style="display: none;" name="option" value="end">
        <input v-on:click="clicktwo" class="btn btn-primary" type="submit" id="next" value="I am reading this on my ONLINE laptop with Ubuntu freshly installed">
      </form>
      <form action="" method="post" class="mb-5">
        <input style="display: none;" name="option" value="end">
        <input v-on:click="clickthree" class="btn btn-primary" type="submit" id="next" value="I am recovering my cold storage wallet">
      </form>
    </div>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
    click () {
      this.$router.push({path: '/step1'})
    },
    clicktwo () {
      this.$router.push({path: '/step5'})
    },
    clickthree () {
      this.$router.push({path: '/step52'})
    }
  },
  computed: {
  },
  name: 'label',
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
