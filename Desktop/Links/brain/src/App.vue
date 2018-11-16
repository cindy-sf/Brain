<template>
  <div id="app">
    <nav>
      <hr>
      <hr>
      <hr>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins');
* {
  box-sizing: border-box;
  color: #000;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  outline: none;
  padding: 0;
  scroll-behavior: smooth;
  text-decoration: none;
}

::-webkit-scrollbar {
  display: none;
}

nav {
    display: block;
    left: 20px;
    position: fixed;
    top: 20px;
    width: 30px;
}

nav hr {
    background-color: #000;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    border: 1px solid #000;
    height: 3px;
    margin: 5px 0;
    transition: 0.3s;
    &:first-child {
      width: 30px;
    }
    &:nth-child(2){
      width: 20px;
    }
    &:last-child{
      width: 30px;
    }
}

nav:hover hr {
    width: 30px;
}
</style>
