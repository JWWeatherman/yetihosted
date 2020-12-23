<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu and Label Laptops</h2>
      <p>Install Ubuntu on both laptops following these rules and then click <b>Next</b>.</p>
      <ul>
          <li>Use the Long Term Support (LTS) Version of Ubuntu. This is currently 20.04 and is at the top of the download page. We can not guarantee that Yeticold will work with any other Ubuntu version.</li>
          <li>Delete and erase all existing partitions using the Disk Utility that you can access by selecting "Try Ubuntu" before installing Ubuntu.</li>
          <li>Use one of your USB drives to create a Bootable Ubuntu drive.</li>
          <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a>.</li>
          <li>Using a marker label one laptop <b>Primary</b> and the other laptop <b>Secondary</b>. The primary laptop will be a receive only device and the secondary laptop will handle private keys. The primary will also be the laptop we download the Blockchain to so it should be a laptop with an SSD type hard drive.</li>
          <li>Also label a single USB drive <b>Transfer</b> to be used for moving the PSBTs around.</li>
      </ul>
      <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Cold/step3'})
    }
  },
  components: {
    navbarcold
  }
}
</script>
