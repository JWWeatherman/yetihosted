<template>
  <div>
    <navbarBCO></navbarBCO>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Step 4: Download Yeti to the Online Laptop</h2>
      <ol>
        <li>On your <b>Online</b> laptop click on the <b>9 Dots</b> in the bottom left corner of your Ubuntu desktop and then click <b>Terminal</b>.</li>
        <li>Click <b>Copy</b> to copy the text below this line.</li>
        <div style="width:75%;" class="input-group mb-3 mt-3">
        <input v-on:click="copy1" v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" value="sudo apt-get update; sudo apt-get install git; git clone https://github.com/jwweatherman/yeticold.git ~/yeticold">
          <div class="input-group-append">
            <span v-on:click="copy1" class="btn btn-secondary" id="basic-addon2">Copy</span>
          </div>
        </div>          
        <li>In the terminal window right click and select <b>Paste</b> and then click <b>Enter</b>.</li>
        <li>Click <b>Next</b> to continue.</li>
      </ol>         
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarBCO from './navbarBCO'
export default {
  methods: {
   click () {
      this.$router.push({path: '/BCO/step5'})
    },
    copy1 () {
      let copyText = document.getElementById("copy1")
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
    }
  },
  components: {
    navbarBCO
  }
}
</script>
