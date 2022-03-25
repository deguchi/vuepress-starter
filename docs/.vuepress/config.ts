import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'ja-JP',
  title: 'VuePressのサンプル',
  description: 'Just playing around',
  base: '/',
  // theme and its config
//   theme: '@vuepress/theme-default',
//   themeConfig: {
//     logo: 'https://vuejs.org/images/logo.png',
//   },
    themeConfig: {
        logo: '/images/logo.png',
        sidebar : [
            { text: 'はじめに', link: '/' },
            { text: 'テスト', link: '/test' },
        ]
    },
    // theme: path.resolve(__dirname, './theme'),
    plugins: [
        ['@vuepress/plugin-search']
    ],
})