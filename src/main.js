import Vue from 'vue'
import App from './App.vue'
import AppComputedProperties from './AppComputedProperties.vue'

Vue.filter('capitalize', function(string){
  var capitalFirst = string.charAt(0).toUpperCase();
  var noCaseTail = string.slice(1, string.length);

  return capitalFirst + noCaseTail; 
});

Vue.filter('capitalizeES6', function(string){
  var [first, ...tail] = string;
  return first.toUpperCase() + tail.join('')
});

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#computedProperties',
  render: h => h(AppComputedProperties)
});


