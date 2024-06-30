<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 4: Download Yeti to the <b>Primary</b> Laptop</h2>
      <ol>
        <li>On your <b>Primary</b> laptop click on the <b>9 Dots</b> in the bottom left corner of your Ubuntu desktop and then click <b>Terminal</b>.</li>
        <li>
          Click <b>Copy</b> to copy the text below this line.
          <div class="input-list-item">
            <div style="width: 75%;" class="input-group mb-3 mt-3">
              <input readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" :value="command">
              <div class="input-group-append">
                <span class="btn btn-secondary" v-on:click="copyCommand">Copy</span>
              </div>
            </div>
          </div>
        </li>
        <li>In the terminal window right click and select <b>Paste</b> and then click <b>Enter</b>.</li>
        <li>Yeti will automatically open a new tab that displays step 5.</li>
      </ol>
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold';

export default {
  components: {
    navbarcold
  },
  data() {
    return {
      command: `sudo apt update && sudo apt-get upgrade -y && { grep -q "^VERSION=\"24.04" /etc/os-release && sudo apt-add-repository -y ppa:deadsnakes/ppa || true; } && sudo apt-get install -y python3.10 && sudo apt-get install -y python3.10-venv git && python3.10 -m venv ~/my_venv && source ~/my_venv/bin/activate && python -m ensurepip --upgrade && git clone https://github.com/jwweatherman/yeticold.git ~/yeticold; pip install flask; pip install bip32; python3 ~/yeticold/initialize.py YetiLevelThreePrimary`
    };
  },
  methods: {
    copyCommand() {
      let copyText = document.getElementById("copy1");
      copyText.select();
      document.execCommand("copy");
    }
  }
};
</script>
