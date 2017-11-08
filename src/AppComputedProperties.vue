<template>
  <div id="app">
       <h1>{{ msg }}</h1>

       <h2>-----------------------------------------------------------Example 1-----------------------------------------------------------</h2>
       <input type="text" v-model="name" />
       <input type="text" id="surname" value='Snow' />
       <button @click="saveSurname">Save Surname</button>
       <output> {{ computedFullName }} </output>

       <br/>
       <br/>

       <h2>-----------------------------------------------------------Example 2-----------------------------------------------------------</h2>
       <div>
            <label>Legs: <input type="range" v-model="legCount"></label> <br>
            <label>Tops: <input @input="update" :value="tableCount"></label><br><br>
            <output>
                We are going to build {{ legCount }} legs
                and assembly {{ tableCount }} tables.
            </output>
       </div>

       <h2>-----------------------------------------------------------Example 3 (Filtering a list)---------------------------------------</h2>
       <div>
            <h3>List of experiments</h3>
            <ul>
                <li v-for="experiment in experiments">
                    {{ experiment.name }} {{ experiment.cost}}m €
                </li>
            </ul>
            <h3>List of Non Physics experiments</h3>
            <ul>
                <li v-for="experiment in nonPhysics(experiments)">
                    {{ experiment.name }} {{ experiment.cost}}m €
                </li>
            </ul>
           
            <h3>Low Cost and Non Physics experiments</h3>
            <ul>
                <li v-for="experiment in filteredExperiments">
                    {{ experiment.name }} {{ experiment.cost}}m €
                </li>
            </ul>
       </div>
       <h2>-----------------------------------------------------------Example 4 (Sorting a list)-----------------------------------------</h2>
       <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Electricity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dam in damsByElectricity">
                        <td> {{ dam.name }} </td>
                        <td> {{ dam.country }} </td>
                        <td> {{ dam.electricity }} </td>
                    </tr>
                </tbody>
            </table>
       </div>
       <h2>-----------------------------------------------------------Example 5 (Sorting a list)-----------------------------------------</h2>
       <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th v-bind:class=" order === 1 ? 'descending' : 'ascending'" @click="sort">Electricity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dam in sortDamsByElectricity">
                        <td> {{ dam.name }} </td>
                        <td> {{ dam.country }} </td>
                        <td> {{ dam.electricity }} </td>
                    </tr>
                </tbody>
            </table>
       </div>


  </div>
</template>

<script>
let surname = "Snow";

export default {
  name: "computedProperties",
  data() {
    return {
      msg: "Computed Properties Example",
      name: "John",
      legCount: 0,
      experiments: [
        { name: "RHIC Ion Collider", cost: 650, field: "Physics" },
        { name: "Neptune UnderSea Observatory", cost: 100, field: "Biology" },
        { name: "Violinist in the Metro", cost: 3, field: "Psychology" },
        { name: "Large Hadron Collider", cost: 7700, field: "Physics" },
        { name: "DIY Particle Detector", cost: 0, field: "Physics" }
      ],
      dams: [
        { name: "Nure Dam", country: "Tajikistan", electricity: 3200 },
        { name: "Three Gorges Dam", country: "China", electricity: 22500 },
        { name: "Tarbela Dam", country: "Pakistan", electricity: 3500 },
        { name: "Guri Dam", country: "Venezuela", electricity: 10200 }
      ],
      order: 1
    };
  },
  computed: {
    computedFullName() {
      return this.name + " " + surname;
    },
    tableCount: {
      get() {
        return this.legCount / 4;
      },
      set(newValue) {
        this.legCount = newValue * 4;
      }
    },
    damsByElectricity() {
      return this.dams.sort((d1, d2) => d2.electricity - d1.electricity);
    },
    sortDamsByElectricity() {
      return this.dams.sort(
        (d1, d2) => d2.electricity - d1.electricity * this.order
      );
    }
  },
  methods: {
    saveSurname() {
      surname = this.$el.querySelector("#surname").value;
    },
    update(e) {
      console.log(e.target.value);
      this.tableCount = e.target.value;
    },
    nonPhysics(list) {
      return list.filter(exp => exp.field !== "Physics");
    },
    lowCost(list) {
      return list.filter(exp => exp.cost <= 3);
    },
    filteredExperiments() {
      return this.lowCost(this.nonPhysics(this.experiments));
    },
    sort() {
      this.order = this.order * -1;
    }
  }
};
</script>

<style lang="scss">
#computedProperties {
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
  list-style-type: circle;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.ascending:after {
  content: "\25B2";
}

.descending:after {
  content: "\25BC";
}

table {
    margin: 0px auto;
}
</style>
