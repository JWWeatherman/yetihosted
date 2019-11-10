<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Label Your Equipment</h2>
      <p>Do following to label your equipment and then click next.</p>
      <ul>
          <li>Using masking tap and a marker write the word "DISCONNECTED" on both the outside and the inside of one laptop and the words "ONLINE" on the outside and inside of the other laptop.</li>
          <li>Use a piece of tape to cover the camera and microphone of both laptops.</li>
          <li>Using a marker write the word "LARGE" on your large external hard drive and "SMALL" on your smaller external hard drive.</li>
      </ul>
      <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
    click () {
      this.$router.push({path: '/step3'})
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