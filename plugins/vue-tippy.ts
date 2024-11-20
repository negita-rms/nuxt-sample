// import Vue from 'vue'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueTippy, {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    defaultProps: {
      placement: 'auto-end',
      allowHTML: true,
    }
  })
})