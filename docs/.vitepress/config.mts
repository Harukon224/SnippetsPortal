import tailwindcss from '@tailwindcss/vite';
import { defineConfig, UserConfig, DefaultTheme } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';

const vitePressOptions: UserConfig<NoInfer<DefaultTheme.Config>> = {
  title: "Snippets Portal",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
};

const vitePressSidebarOptions: VitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: true
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
