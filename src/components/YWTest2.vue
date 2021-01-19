<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
       <h2 style="margin-bottom:35px;">Step 16: Restore your Wallet</h2>
      <p>Next we are going to restore your wallet with two sets of CDs to make sure you can recover your wallet with any three</p>
      <ol>
        <li>Set aside 3 "Seed" CDs labeled "Seed 1", "Seed 2", and "Seed 3".</li>
        <li>Restart yeti on you <b>Primary</b> by clicking on the <b>nine dots</b> in the bottom left corner and open <b>LevelThree</b>.</li>
        <li>Click <b>Recover</b> and follow all the steps starting at step 5. When it asks you to import your seeds use the three CDs you set aside.</li>
        <li>When you see the guide for sending and receiving follow all the steps to confirm you successfully restored your wallet.</li>
        <li>Repeat steps 2 through 4 with the "Seed" CDs labeled "Seed4", "Seed5", and "Seed6".</li>
        <li>After you have restored and tested your wallet twice with 6 different seeds your wallet is tested and you can now send and receive safely.</li>
        <li>After you are finished and are ready to erase your laptop and private keys click <b>Next</b>.</li>
      </ol>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-warning" type="submit" id="next" value="Next">
      <wwg></wwg>
    </div>
  </div>
</template>

<script>
import navbarwarm from './navbarwarm'
import wwg from './WWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Warm/Guide/step3'})
    }
  },
  components: {
    navbarwarm,
    wwg 
  }
}
</script>