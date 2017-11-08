import Vue from 'vue'
import App from './App.vue'
import AppComputedProperties from './AppComputedProperties.vue'
import ChapterTwo from './ChapterTwo.vue'
import moment from 'moment';

Vue.filter('capitalize', function (string) {
  var capitalFirst = string.charAt(0).toUpperCase();
  var noCaseTail = string.slice(1, string.length);

  return capitalFirst + noCaseTail;
});

Vue.filter('capitalizeES6', function (string) {
  var [first, ...tail] = string;
  return first.toUpperCase() + tail.join('')
});

Vue.filter('date', function (date, locale) {
  moment.locale(locale);
  return moment(date).format('LL');
})

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#computedProperties',
  render: h => h(AppComputedProperties)
});

new Vue({
  el: '#chapterTwo',
  render: h => h(ChapterTwo)
});


