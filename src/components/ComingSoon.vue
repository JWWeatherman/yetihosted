<template>
    <div class="container" style="margin-top: 3rem;">
    <h2>Coming Soon...</h2>
    <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
  </div>
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
  name: 'commingsoon',
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