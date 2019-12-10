 <template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 6: Start Yeti on your ONLINE laptop.</h2>
      <ol>
          <li>Click <b>Copy</b> to copy the text below this line.</li>
          <div style="width:75%;" class="input-group mb-3 mt-3">
            <input v-on:click="copy1" v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" value="python3 ~/yeticold/scripts/YetiColdOnline.py">
            <div class="input-group-append">
              <span v-on:click="copy1" class="btn btn-secondary" id="basic-addon2">Copy</span>
            </div>
          </div>
          <li>In the terminal window right click and select <b>Paste</b> and then click <b>Enter</b>.</li>
          <li>When a new browser window is opened click <b>Try Again</b>.</li>
          <li>Once Step 7 is shown, close this tab to continue with Step 7 in the other tab.</li>
      </ol> 
    </div>
  </div>
</template>

<script>
import navbar from './components/navbarcold'
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
    navbarcold
  }
}
</script>
