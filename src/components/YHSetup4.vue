<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 4: Download Yeti to Your Laptop</h2>
      <ol>
        <li>On your laptop click on the <b>9 Dots</b> in the bottom left corner of your Ubuntu desktop and then click <b>Terminal</b>.</li>
        <li>Click <b>Copy</b> to copy the text below this line.</li>
        <div style="width:75%;" class="input-group mb-3 mt-3">
        <input v-on:click="copy1" v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" value="sudo apt-get update; yes | sudo apt-get install git; git clone https://github.com/jwweatherman/yeticold.git ~/yeticold; python3 ~/yeticold/initialize.py YetiLevelOne">
          <div class="input-group-append">
            <span v-on:click="copy1" class="btn btn-secondary" id="basic-addon2">Copy</span>
          </div>
        </div>          
        <li>In the terminal window right click and select <b>Paste</b> and then click <b>Enter</b>.</li>
        <li>Yeti will automatically open a new tab that displays step 5.</li>
      </ol>        
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-danger" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarhot from './navbarhot'
export default {
  methods: {
    copy1 () {
      let copyText = document.getElementById("copy1")
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
    }
  },
  components: {
    navbarhot
  }
}
</script>
