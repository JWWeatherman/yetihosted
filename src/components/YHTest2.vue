<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Step 16: Restore your Wallet</h2>
      <p>Restore your wallet with one of your CDs to make sure you can recover your wallet.</p>
      <ol>
        <li>Restart Yeti on your laptop by clicking on the <b>nine dots</b> in the bottom left corner and open <b>Level One</b>.</li>
        <li>Click <b>Recover</b> and follow the steps until you have tested sending and receiving a small amount of bitcoin using your freshly restored wallet.</li>
        <li>You have thoroughly tested your Yeti Wallet. Deposit the funds you wish to secure in your Yeti Wallet and then click <b>Next</b>to continue.</li>
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
