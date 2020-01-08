<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu</h2>
      <p>Install Ubuntu on both laptops following these rules and then click <b>Next</b>.</p>
      <ul>
          <li>Use the Long Term Support (LTS) Version of Ubuntu. This is currently 18.04.3 and is at the top of the download page.</li>
          <li>Delete and erase all existing partitions using the Disk Utility that you can access by selecting "Try Ubuntu" before installing Ubuntu.</li>
          <li>Use one of your usb drives drive to create a bootable Ubuntu drive.</li>
          <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a>.</li>
      </ul>
      <input v-on:click="click" class="btn btn-warning" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarwarm from './navbarwarm'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Warm/step3'})
    }
  },
  components: {
    navbarwarm
  }
}
</script>
