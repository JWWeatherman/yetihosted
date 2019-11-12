<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 5: Download Yeti to your ONLINE laptop</h2>
      <div>You should be reading this on a freshly installed Ubuntu laptop labled "ONLINE" because you follewed the previous steps. Click <a href="https://drive.google.com/uc?authuser=0&id=11ELudchViKE7OKVk0C7w7nzIhwDPhB2T&export=download" download> here</a> download Yeti and then click Next to continute.</div>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
   click () {
      this.$router.push({path: '/step6'})
    }
  },
  computed: {
  },
  name: 'downloadscript',
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
