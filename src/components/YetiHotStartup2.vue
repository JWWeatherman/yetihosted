<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu</h2>
      <ol>
        <li>Install Ubuntu on both laptops following these rules.</li>
        <ul>
            <li>Use the Long Term Support (LTS) Version of Ubuntu. This is currently 20.04 and is at the top of the download page. We can not guarantee that Yeticold will work with any other Ubuntu version.</li>
            <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a>.</li>
            <li>Use one of your USB drives to create a Bootable Ubuntu drive.</li>
            <li>Select "Try Ubuntu", and then use the Disk Utility to delete and erase all existing partitions.</li>
            <li>Create a new partition consisting of the entire device, and then install Ubuntu.</li>
        </ul>
        <li>After you see the desktop click on the <b>9 Dots</b> in the bottom left corner of your Ubuntu desktop and then click <b>Software Updater</b>.</li>
        <li>Click <b>Install Now</b>.</li>
        <li>When it has finished installing the updates click <b>Next</b> on this page.</li>
      </ol>
      <input v-on:click="click" class="btn btn-danger" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarhot from './navbarhot'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Hot/step3'})
    }
  },
  components: {
    navbarhot
  }
}
</script>
