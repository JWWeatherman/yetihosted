<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu and Label Laptops</h2>
      <p>Install Ubuntu on both laptops following these rules.</p>
        <ul>
            <li>Use the Long Term Support (LTS) Version of Ubuntu. This is currently 20.04 and is at the top of the download page.</li>
            <li>Erase all existing data on the hard drive before installing.</li>
            <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a>.</li>
            <li>Install security updates using Software Updater.</li>
        </ul>
        <p>When you have completed this for both laptops click <b>Next</b> to continue.</p>
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
