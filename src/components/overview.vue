<template>
    <div class="container" style="margin-top: 3rem;">
      <h2></h2>
      <div class="hero-unit">
          <h1>Yeti Cold Storage</h1>
          <p>Yeti Cold Storage is for storing more than $50,000 USD worth of bitcoin. It is a 3 of 7 HD multisig setup where private keys are never on an internet connected device.</p>
          <p>
            <input v-on:click="Cold" style="margin-bottom:50px;" class="btn btn-primary btn-large" type="submit" id="next" value="Learn more">
          </p>
      </div>
      <div class="hero-unit">
          <h1>Yeti Warm Storage</h1>
          <p>Yeti Warm Storage is for storing between $5,000 and $50,000 USD worth of bitcoin. It is a 3 of 7 HD multisig setup that requries only a single computer to setup.</p>
          <p>
            <input v-on:click="Warm" style="margin-bottom:50px;" class="btn btn-warning btn-large" type="submit" id="next" value="Learn more">
          </p>
      </div>
      <div class="hero-unit">
          <h1>Yeti Hot Storage</h1>
          <p>Yeti Hot Storage is for storing under $5,000 USD worth of bitcoin. It is very easy to backup and restore and requries only a single computer to setup.</p>
          <p>
            <input v-on:click="Hot" style="margin-bottom:50px;" class="btn btn-danger btn-large" type="submit" id="next" value="Learn more">
          </p>
      </div>
      <form action="" method="post">
        <input style="display: none;" name="option" value="End">
        <input class="btn btn-primary" type="submit" id="next" value="Next">
      </form>
      <p>
       <p style="color:light-gray;">For more details and the source code click <a href="">here</a> for the github repo</p>
    </div>
      
</template>

<script>
export default {
  mounted () {
  },
  methods: {
    Cold () {
      this.$router.push({path: '/Cold/step1'})
    },
    Warm () {
      this.$router.push({path: '/Warm/step1'})
    },
    Hot () {
      this.$router.push({path: '/Hot/step1'})
    }
  },
  computed: {
  },
  name: 'Overview',
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
