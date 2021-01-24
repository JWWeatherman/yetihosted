<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 33: Restore your Wallet</h2>
      <p>Restore your wallet with two sets of CDs to make sure you can recover your wallet with any three.</p>
      <ol>
        <li>Set aside the three seed CDs labeled "Seed 1," "Seed 2," and "Seed 3."</li>
        <li>Restart Yeti on you <b>Primary</b> by clicking on the <b>nine dots</b> in the bottom left corner and click the <b>Level Three</b> icon.</li>
        <li>Click <b>Recover Wallet</b> and follow all the steps until you have tested sending and receiving a small amount of bitcoin using these seeds. Be sure that when it asks you to import your seeds use the three CDs you set aside.</li>
        <li>After you have sent and received a small amount, but <b>before you erase your laptop</b>, repeat steps 2 through 4 with the CDs labeled "Seed 4," "Seed 5", and "Seed 6."</li>
        <li>You have thoroughly tested your Yeti Wallet. Deposit the funds you wish to secure in your Yeti Wallet and then click <b>Next</b> to continue.</li>
      </ol>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
import cwg from './CWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Cold/Guide/step3'})
    }
  },
  components: {
    navbarcold,
    cwg
  }
}
</script>
