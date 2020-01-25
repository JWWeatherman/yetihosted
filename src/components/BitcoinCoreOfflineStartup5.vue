 <template>
  <div>
    <navbarBCO></navbarBCO>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 5: Start Bitcoin Core Offline on your <b>Primary</b> laptop.</h2>
      <ol>
          <li>Click <b>Copy</b> to copy the text below this line.</li>
          <div style="width:75%;" class="input-group mb-3 mt-3">
            <input v-on:click="copy1" v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" value="python3 ~/yeticold/scripts/BitcoinCoreOnline.py">
            <div class="input-group-append">
              <span v-on:click="copy1" class="btn btn-secondary" id="basic-addon2">Copy</span>
            </div>
          </div>
          <li>In the terminal window right click and select <b>Paste</b> and then click <b>Enter</b>.</li>
          <li>When a new browser window is opened click <b>Try Again</b>.</li>
          <li>Once Step 6 is shown, close this tab to continue with Step 6 in the other tab.</li>
      </ol> 
    </div>
  </div>
</template>

<script>
import navbarBCO from './navbarBCO'
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
    navbarBCO
  }
}
</script>