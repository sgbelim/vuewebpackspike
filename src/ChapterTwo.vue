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

    <h2>--------------------------------------------Form with Checkbox--------------------------------------</h2>
    <form>
      <fieldset>
        <legend>What printers you want to use?</legend>
        <label>
          <input type="checkbox" v-model="outputPrinter" value="monochrome" />
          Monochrome <br>
        </label>
        <label>
          <input type="checkbox" v-model="outputPrinter" value="plasma" />
          Plasma <br>
        </label>
        <label>
          <input type="checkbox" v-model="outputPrinter" value="cloner" />
          3D DNA Cloner <br>
        </label>
        <input type="submit" value= "Print now" @click.prevent="printHandler" />
      </fieldset>
    </form>

    <h2>--------------------------------------------Form with RadioButton-----------------------------------</h2>
    <form>
      <fieldset>
        <legend>Today's Animals</legend>
        <label>
          <input type="radio" v-model="animal" :value="animals[i]" />
           {{ animals[i] }}
        </label> <br>
        <label>
          <input type="radio" v-model="animal" :value="animals[i + 1]" />
          {{ animals[i + 1] }}
        </label> <br> <br>
        <div>
          Your farm is composed by {{ farm.join(',') }}
        </div> <br> <br>
        <input type="submit" value= "Print now" @click.prevent="addToFarm" />
      </fieldset>
    </form>

    <h2>--------------------------------------------Select Element------------------------------------------</h2>
    <form>
      <fieldset>
        <legend>Choose your country</legend>
        <select v-model="choosenCountry">
            <option>Japan</option>
            <option>India</option>
            <option>Canada</option>
        </select>
        <br><br>
        <div>  {{ choosenCountry }} </div>
      </fieldset>
    </form>

    <h2>--------------------------------------------Multiple Select------------------------------------------</h2>
    <form>
      <fieldset>
        <legend>Choose your clan</legend>
        <select v-model="clan">
            <option v-for="(type, clan) in clans"> {{ clan }}</option>
        </select>
        <br><br>
        <select v-model="type">
            <option v-for="(species, type) in clans[clan]"> {{ type }}</option>
        </select>
        <br><br>
        <select>
            <option v-for="(animals, species) in clans[clan][type]"> {{ species }}</option>
        </select>
      </fieldset>
    </form>
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
      limit: 50,
      outputPrinter: [],
      animals: ["Sheep", "Chicken", "Camel"],
      i: 0,
      animal: undefined,
      farm: [],
      choosenCountry: undefined,
      clan: undefined,
      type: undefined,
      clans: {
        mammalia: {
          "have fingers": {
            human: "human",
            chimpanzee: "chimpanzee"
          },
          fingerless: {
            cat: "cat",
            bear: "bear"
          }
        },
        birds: {
          flying: {
            eagle: "eagle",
            pidgeon: "pidgeon"
          },
          "non flying": {
            chicken: "chicken"
          }
        }
      }
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
  },
  methods: {
    printHandler() {
      let printers = this.outputPrinter;
      alert(
        "Printing with: " +
          (printers.length ? printers.join(", ") : "none") +
          "."
      );
    },
    addToFarm() {
      if (this.animal === undefined) {
        return;
      }
      this.farm.push(this.animal);
      this.i = Math.floor(Math.random() * (this.animals.length - 1));
      this.animal = undefined;
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
