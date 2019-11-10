

<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 3: Install Ubuntu</h2>
      <p>Install Ubuntu on both laptops following these rules and then click next.:</p>
      <ul>
          <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0</a></li>
          <li>Never connect the DISCONNECTED laptop to any wifi network and disable the wifi card in Ubuntu as soon as possible.</li>
          <li>Delete and erase all existing partitions using the Disk utility that you can access by selecting "Try Ubuntu" before installing Ubuntu.</li>
          <li>Use your SMALL external hard drive to create a bootable Ubuntu drive</li>
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
      this.$router.push({path: '/step4'})
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