<template>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 6: Start Yeti on your ONLINE laptop.</h2>
      <ol>
          <li>Select the text below this line, right click and select Copy.</li>
          <div style="width:75%;" class="input-group mb-3 mt-3">
            <input v-on:click="copy1" v-b-tooltip.click v-b-tooltip.blur title="Copied" readonly type="text" class="form-control" aria-label="Default" id="copy1" aria-describedby="inputGroup-sizing-default" value="python3 ~/yeticold/scripts/YetiWarm.py">
            <div class="input-group-append">
              <span v-on:click="copy1" class="btn btn-secondary" id="basic-addon2">Copy</span>
            </div>
          </div>
          <li>Provide your laptop password and click Enter.</li>
          <li>When prompted type "y" and click Enter.</li>
          <li>When a new browser window is opened click "Try Again."</li>
          <li>Click start set up.</li>
          <li>Once Step 6 is shown, close this tab to continue with Step 6 in the other tab.</li>
      </ol> 
    </div>
</template>

<script>
export default {
  methods: {
    copy1 () {
      let copyText = document.getElementById("copy1")
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
    }
  }
}
</script>