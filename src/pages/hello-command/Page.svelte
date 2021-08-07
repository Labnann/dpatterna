<script>
  import {onMount} from "svelte";
  import {Light} from "../../patterns/command/Remote";



  let src  =`./images/light-receiver/on.png`;

  let lightImg;
  let light;

  onMount(()=>{
    lightImg.src = `./images/light-receiver/off.png`;
    light = new Light(lightImg);
    console.log( typeof light);
  })


  setTimeout(()=>{console.log(light.turnOn())},3000);



  const turnOnLight = ()=>{
    lightImg.src =`./images/light-receiver/on.png`;
  }




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
  <button class="on" on:click={light.turnOn()}>On</button>
  <button class="off" on:click={light.turnOff()}>Off</button>

  <button class="increase-lum"  on:click={light.increaseRed()}>+</button>
  <button class="decrease-lum"  on:click={light.decreaseRed()}>-</button>

  <button class="red-light" on:click={light.makeRed()}>Red</button>
</div>

<div class="portrait"><img {src} bind:this={lightImg} alt={src} /></div>
