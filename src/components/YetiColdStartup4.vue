<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 4: Download Yeti to your ONLINE laptop</h2>
      <ol>
          <li>Click on the 9 dots in the bottom left corner of your Ubuntu desktop and then click Terminal.</li>
          <li>Click "copy" to copy the text below this line.</li>
          <div style="width:75%;" class="input-group mb-3 mt-3">
            <input v-on:click="copy1" v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" value="sudo apt-get install git">
            <div class="input-group-append">
              <span v-on:click="copy1" class="btn btn-secondary" id="basic-addon2">Copy</span>
            </div>
          </div>
          <li>In the terminal window right click and select Paste and then click Enter.</li>
          <li>Enter your password and then click Enter.</li>
          <li>Click "copy" to copy the text below this line.</li>
          <div style="width:75%;" class="input-group mb-3 mt-3">
            <input v-on:click="copy2" v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy2" aria-describedby="inputGroup-sizing-default" value="git clone https://github.com/jwweatherman/yeticold.git ~/yeticold">
            <div class="input-group-append">
              <span v-on:click="copy2" class="btn btn-secondary" id="basic-addon2">Copy</span>
            </div>
          </div>
          <li>In the terminal window right click and select Paste and then click Enter.</li>
          <li>Click next to continue.</li>
      </ol>          
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
</template>

<script>
export default {
  methods: {
   click () {
      this.$router.push({path: '/Cold/step5'})
    },
    copy1 () {
      let copyText = document.getElementById("copy1")
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
    },
    copy2 () {
      let copyText = document.getElementById("copy2")
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
      copyText.click()
    }
  }
}
</script>
