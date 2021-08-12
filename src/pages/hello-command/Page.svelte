<script>
  import {onMount} from "svelte";
  import {Remote} from "../../patterns/command/Remote";
  import {ELightControllerCommand} from "../../patterns/command/Remote";



  let src  =`./images/light-receiver/on.png`;
  let lightImg;
  let remote;

  onMount(()=>{
    remote = new Remote(lightImg);
  })



</script>

<style>
  .btn-group button {
    padding: 10px 24px;
    cursor: pointer;
    width: 20%;
    display: block;
  }

  .btn-group button:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
  }

  /* Add a background color on hover */
  .btn-group button:hover {
    filter: brightness(85%);
  }

  .decrease-lum {
    background-color: #a9c1c9;
  }
  .red-light {
    background-color: #f44336;
  }
  .increase-lum {
    background-color: #8bb19b;
  }
  .on {
    background-color: #e7e7e7;
    color: black;
  }
  .off {
    background-color: #555555;
    color: white;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .portrait {
    height: 300px;
    width: 500px;
  }

</style>

<h1>Command buttons</h1>

<div class="btn-group">
  <button class="on" on:click={remote.executeCommand(ELightControllerCommand.POWER)}>On</button>
  <button class="off" on:click={remote.unExecuteCommand(ELightControllerCommand.POWER)}>Off</button>

  <button class="increase-lum"  on:click={remote.executeCommand(ELightControllerCommand.RED_INTENSITY_UP)}>+</button>
  <button class="decrease-lum"  on:click={remote.unExecuteCommand(ELightControllerCommand.RED_INTENSITY_UP)}>-</button>

  <button class="red-light" on:click={remote.executeCommand(ELightControllerCommand.RED)}>Red</button>
</div>

<div class="portrait"><img {src} bind:this={lightImg} alt={src} /></div>
