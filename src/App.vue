<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
        <li><a href="/computed-properties.html">Computed Properties</a></li>
        <li><a href="/ChapterTwo.html">Chapter Two</a></li>
        <li><a href="/ChapterFour.html">Chapter Four</a></li>
    </ul>
    <h1>{{ msg }}</h1>
    <br/><br/>
    <div>
      <h1>Filters Example</h1>
      {{ 'hello world' | capitalize }} <br/>
      {{ 'hello world with ES6' | capitalizeES6 }}
    </div>
    <div>
      <h1> Debugging with JSON filter </h1>
      <p>Cat object: {{ cat }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      cat: {
        sound: "meow"
      }
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
