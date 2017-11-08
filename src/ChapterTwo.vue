<template>
  <div id="chapterTwo">
    <h1>{{ msg }}</h1>
    <h2>--------------------------------------------v-show and v-if-----------------------------------------</h2>
    <div id="ghost">
        <div v-show="isNight">
            I'm a ghost!! Boo!
        </div>
    </div>
    <div id="ghost2">
        <div v-if="isNight">  
            I'm a ghost!!! Boo!!
        </div>
    </div>

    <h2>--------------------------------------------Limit Text----------------------------------------------</h2>
    <textarea v-model="memeText" :maxlength="limit" :class="{ warn: longText }"></textarea>
    {{ memeText.length }}

  </div>
</template>

<script>
export default {
  name: "chapterTwo",
  data() {
    return {
      msg: "Chapter Two",
      isNight: true,
      memeText: "What if I told you CSS can do that",
      limit: 50
    };
  },
  computed: {
    longText() {
      if (this.limit - this.memeText.length <= 10) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
#chapterTwo {
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
