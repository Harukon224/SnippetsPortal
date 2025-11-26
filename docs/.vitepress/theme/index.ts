import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({ components, directives })

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify)
  },
}
