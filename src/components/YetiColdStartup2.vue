<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu</h2>
      <p>Install Ubuntu on both laptops following these rules and then click <b>Next</b>.</p>
      <ul>
          <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a>.</li>
          <li>Never connect the <b>Disconnected</b> laptop to any wifi network and disable the wifi card in Ubuntu as soon as possible.</li>
          <li>Delete and erase all existing partitions using the Disk Utility that you can access by selecting "Try Ubuntu" before installing Ubuntu.</li>
          <li>Use your <b>Small</b> external hard drive to create a bootable Ubuntu drive.</li>
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
