<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 2: Install Ubuntu</h2>
      <p>Install Ubuntu on your laptop and then click Next.</p>
      <ul>
          <li>Use only trustworthy guides such as this one: <a href="https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0">Install Ubuntu</a></li>
          <li>Delete and erase all existing partitions using the Disk utility that you can access by selecting "Try Ubuntu" before installing Ubuntu.</li>
          <li>Use one of your USB drives to create a bootable Ubuntu drive.</li>
      </ul>
      <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
</template>

<script>
export default {
  methods: {
    click () {
      this.$router.push({path: '/Warm/step3'})
    }
  }
}
</script>
