<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 4: Download Yeti to your ONLINE laptop</h2>
      <ol>
          <li>Click on the 9 dots in the bottom left and then click on Terminal.</li>
          <li>Select the text below this line, right click and select Copy.</li>
          <code>sudo apt-get install git</code>
          <li>In the terminal window right click and select Paste and then click Enter</li>
          <li>Select the text below this line, right click and select Copy.</li>
          <code>git clone https://github.com/jwweatherman/yeticold.git ~/yeticold</code>
          <li>In the terminal window right click and select Paste and then click Enter</li>
          <li>Click next to continue.</li>
      </ol>          
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
   click () {
      this.$router.push({path: '/Cold/step5'})
    }
  },
  computed: {
  },
  name: 'Step4',
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
