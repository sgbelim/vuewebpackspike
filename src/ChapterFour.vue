<template>
  <div id="chapterFour">
    <h1>{{ msg }}</h1>
    <h2>--------------------------------------------Simple Component-----------------------------------------</h2>
    <div>
        <light-bulb></light-bulb>
        <light-bulb></light-bulb>
        <light-bulb></light-bulb>
    </div>
  </div>   
</template>

<script>
export default {
  name: "chapterFour",
  data() {
    return {
      msg: "Chapter Four" 
    };
  } 
};
</script>

<style lang="scss">
#chapterFour {
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

.warn {
  background-color: mistyrose;
}
</style>
