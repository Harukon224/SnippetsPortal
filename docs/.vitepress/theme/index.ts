import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import Layout from './Layout.vue'

const vuetify = createVuetify({ components, directives })

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.use(vuetify)
  },
}
