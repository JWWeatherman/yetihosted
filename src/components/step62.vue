<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 6: Start Yeti on your ONLINE laptop.</h2>
      <ol>
        <li>Open the termimnal application by clicking the 9 dots in the lower left hand corner and then clicking on "Terminal."</li>
        <li>Inside the terminal application type "python3 ~/Downloads/scripts/recoveryonline.py" . You can paste into the terminal by right clicking and selecting Paste.</li>
        <li>When promted enter your password in the terminal.</li>
        <li>Type "y" and click Enter when prompted.</li>
        <li>When complete a browser window will open. If you get an "unable to connect error" in your browser wait a moment and click refresh.</li>
        <li>When you see the "Step 7: Install Bitcoin Core" page this tab and continue with step 7 in the other browser tab.</li>
      </ol>
    </div>
</template>

<script>
export default {
  name: 'downloadscript',
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