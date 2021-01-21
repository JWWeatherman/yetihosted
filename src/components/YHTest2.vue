<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Step 16: Restore your Wallet</h2>
      <p>First we are going to restore your wallet with one of your CDs to make sure you can recover your wallet.</p>
      <ol>
        <li>Restart yeti on you laptop by clicking on the <b>nine dots</b> in the bottom left corner and open <b>LevelOne</b>.</li>
        <li>Click <b>Recover</b> and follow all the steps starting at step 5. When it asks you to import your seeds use the any of your "seed" CDs.</li>
        <li>When you see the step to go to <code>hwg.yeticold.com</code> ignore that and instead follow the bellow guide to make sure your wallet is still working.</li>
        <li>After you have restored and tested your wallet you can now send and receive safely.</li>
        <li>After you are finished and are ready to erase your laptop and private keys click <b>Next</b>.</li>
      </ol>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-danger" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarhot from './navbarhot'
import hwg from './HWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Hot/Guide/step3'})
    }
  },
  components: {
    navbarhot,
    hwg
  }
}
</script>