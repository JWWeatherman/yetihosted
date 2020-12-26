<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu and Label Laptops</h2>
      <ol>
        <li>Install Ubuntu on both laptops following these rules.</li>
        <ul>
            <li>Use the Long Term Support (LTS) Version of Ubuntu. This is currently 20.04 and is at the top of the download page.</li>
            <li>Delete and erase all existing partitions using the Disk Utility that you can access by selecting "Try Ubuntu" before installing Ubuntu.</li>
            <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a>.</li>
        </ul>
        <li>After you see the desktop click on the <b>9 Dots</b> in the bottom left corner of your Ubuntu desktop and then click <b>Software Updater</b>.</li>
        <li>Click <b>Install Now</b>.</li>
        <li>When it has finished installing the updates click <b>Next</b> on this page.</li>
      </ol>
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
