<template>
	<div class="wrapper">
		<div class="container">
      <h1 class="title">
        Hello from  <a class="link" target="_blank" href="https://github.com/yunglocokid">@yunglocokid</a>
      </h1>
      <button class="button" @click="increment">Count is: {{count}}</button>
		</div>
	</div>
</template>

<style>
body {
  cursor: url("https://vsthemes.org/uploads/cursors/24897/ec9c27ec4afcbc9e321f3114ee514696.webp"),auto;
}
@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}
.container{
  color: aliceblue;
  box-sizing: border-box;
  flex-flow: column wrap;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.link{
  background: linear-gradient(45deg, #9c20aa 33%, #fb3570);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0B2349;
}
.link::after{
  content: "";
  width: 5px;
  height: 25px;
  background: #ec7fff;
  display: inline-block;
  animation: cursor-blink 1.5s steps(2) infinite;
}
.title a {
  text-decoration: none;
  color: blueviolet;
}
.wrapper{
  background: black;
  font-family: "Dubai Medium";
}

.button{
  cursor: pointer;
  background:
      linear-gradient(#000 0 0) padding-box, /*this is your grey background*/
      linear-gradient(to right, #9c20aa, #fb3570) border-box;
  color: aliceblue;
  padding: 10px;
  border: 5px solid transparent;
  border-radius: 15px;
  display: inline-block;
}
</style>

<script setup lang="ts">
const count = ref(1)

const increment = () => {
  count.value += 1
}
</script>
