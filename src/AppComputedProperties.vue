<template>
  <div id="app">
       <h1>{{ msg }}</h1>

       <input type="text" v-model="name" />
       <input type="text" id="surname" value='Snow' />
       <button @click="saveSurname">Save Surname</button>
       <output> {{ computedFullName }} </output>

       <br/>
       <br/>

       <div>
            <label>Legs: <input type="range" v-model="legCount"></label> <br>
            <label>Tops: <input @input="update" :value="tableCount"></label><br><br>
            <output>
                We are going to build {{ legCount }} legs
                and assembly {{ tableCount }} tables.
            </output>
       </div>

  </div>
</template>

<script>
let surname = 'Snow';

export default {
  name: 'computedProperties',
  data () {
    return {
      msg: 'Computed Properties Example',
      name : 'John',
      legCount : 0
    }
  },
  computed: {
      computedFullName () {
          return this.name + ' ' + surname;
      },
      tableCount : {
          get () {
              return this.legCount / 4;
          },

          set (newValue) {
              this.legCount = newValue * 4 
          }
      }
  },
  methods: {
    saveSurname() {
        surname = this.$el.querySelector('#surname').value;
    },
    update(e) {
        console.log(e.target.value);
        this.tableCount = e.target.value;
    }
  }
}
</script>

<style lang="scss">
#computedProperties {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
