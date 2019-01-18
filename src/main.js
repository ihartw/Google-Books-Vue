import Vue from 'vue'
import VueResource from 'vue-resource'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'animate.css'
import App from './App.vue'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
	created: function() {
		document.getElementById('preloader').style.display = "none";
	},
	render: h => h(App)
}).$mount('#app')