<template>
    <nav class="form-row navbar navbar-light" style="background-color: rgb(112,196,245)!important;">
        <img v-on:click="Home" src="@/assets/logo.png" width="50" height="50" class="align-top" alt="">
        <h3 style="color:white;margin:0;">Yeti Bitcoin Cold Storage</h3>
    </nav>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
    Home () {
      this.$router.push({path: '/'})
    }
  },
  computed: {
  },
  name: 'download',
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