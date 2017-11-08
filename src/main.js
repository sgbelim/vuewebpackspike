import Vue from 'vue'
import App from './App.vue'

Vue.filter('capitalize', function(string){
  var capitalFirst = string.charAt(0).toUpperCase();
  var noCaseTail = string.slice(1, string.length);
  console.log(noCaseTail);

  return capitalFirst + noCaseTail; 
});

Vue.filter('capitalizeES6', function(string){
  var [first, ...tail] = string;
  return first.toUpperCase() + tail.join('')
});

new Vue({
  el: '#app',
  render: h => h(App)
})
