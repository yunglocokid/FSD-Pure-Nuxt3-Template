<template>
	<div class="wrapper">
		<div class="container">
      <h1 class="title">
        Hello from  <a class="link" target="_blank" href="https://github.com/yunglocokid">@yunglocokid</a>
      </h1>
		</div>
	</div>
</template>

<style>
@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}
.container{
  color: aliceblue;
  box-sizing: border-box;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

</style>

<script setup lang="ts">
</script>
