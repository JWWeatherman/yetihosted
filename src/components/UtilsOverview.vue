<template>
  <div>
    <navbarutils></navbarutils>
    <div class="container" style="margin-top: 3rem;">
      <h2></h2>
      <div class="hero-unit">
          <h1>Bitcoin Core Offline</h1>
          <p>Bitcoin Core Offline is for sending bitcoin from a private key on a disconnected machine.</p>
          <p>
            <input v-on:click="Cold" style="margin-bottom:50px;" class="btn btn-secondary btn-large" type="submit" id="next" value="Bitcoin Core Offline">
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import navbarutils from './navbarutils'
export default {
  methods: {
    BCO () {
      this.$router.push({path: '/BCO/step1'})
    }
  },
  components: {
    navbarutils
  }
}
</script>