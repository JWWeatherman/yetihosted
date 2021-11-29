<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu and Label Laptops</h2>
      <p>Install Ubuntu on both laptops following these rules.</p>
        <ul>
            <li>Use the Long Term Support (LTS) Version of Ubuntu. This is currently 20.04 and is at the      top of the download page. Yeti has not been well tested with any other Ubuntu version or Linux distribution.</li>
            <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a>.</li>
            <li>Be sure to complete step 7. (Optional) Enable Encryption in the Ubuntu installation guide.</li>
            <li>When choosing a security key use a sentence with at least 7 words with special characters instead of spaces. For example "sinter-seance-henchmen-wavy-scruffy-flesh-solo" <b>Do not use this security key</b>.</li>
            <li>Wright down your security key on paper. You will need to enter it when prompted after each restart of your laptop.</li>
            <li>Use the USB drive you labeled "Ubuntu" to create a Bootable Ubuntu drive.</li>
            <li>Select <b>Try Ubuntu</b>, and then use the <b>Disk Utility</b> to delete and erase all existing partitions.</li>
            <li>Create a new partition consisting of the entire device, and then install Ubuntu on that new partition.</li>
            <li>After you see the desktop click on the <b>9 Dots</b> in the bottom left corner of your Ubuntu desktop and then click <b>Software Updater</b> and then <b>Install Now</b> to install the latest security updates.</li>
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
