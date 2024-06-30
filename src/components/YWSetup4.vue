<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 4: Download Yeti to Your Laptop</h2>
      <ol>
        <li>On your laptop click on the <b>9 Dots</b> in the bottom left corner of your Ubuntu desktop and then click <b>Terminal</b>.</li>
        <li>Click <b>Copy</b> to copy the text below this line.</li>
        <div style="width:75%;" class="input-group mb-3 mt-3">
          <input v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" :value="command">
          <div class="input-group-append">
            <span v-on:click="copyCommand" class="btn btn-secondary" id="basic-addon2">Copy</span>
          </div>
        </div>          
        <li>In the terminal window right click and select <b>Paste</b> and then click <b>Enter</b>.</li>
        <li>Yeti will automatically open a new tab that displays step 5.</li>
      </ol>      
      <input style="margin-top:35px;" class="btn btn-warning" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarwarm from './navbarwarm';

export default {
  components: {
    navbarwarm
  },
  data() {
    return {
      command: `sudo apt update && sudo apt-get upgrade -y && { grep -q "^VERSION=\"24.04" /etc/os-release && sudo apt-add-repository -y ppa:deadsnakes/ppa || true; } && sudo apt-get install -y python3.10 && sudo apt-get install -y python3.10-venv git && python3.10 -m venv ~/my_venv && source ~/my_venv/bin/activate && python -m ensurepip --upgrade && git clone https://github.com/jwweatherman/yeticold.git ~/yeticold; pip install flask; pip install bip32; python3 ~/yeticold/initialize.py YetiLevelTwo`
    };
  },
  methods: {
    copyCommand() {
      let copyText = document.getElementById("copy1");
      if (copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
      }
    }
  }
};
</script>

