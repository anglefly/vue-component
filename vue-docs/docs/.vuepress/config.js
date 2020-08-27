module.exports = {
  title: 'yufei的Vue组件库',
  description: '啥也别管，就是挣钱',
  head: [],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'YF-Vue-UI', link: '/yf-vue-ui/' },
      { text: '开发规范', link: '/standard/' },
      { text: 'github', link: 'https://github.com/anglefly' }
    ],
    sidebar: {
      '/yf-vue-ui/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            ['../yf-vue-ui/guid/', '介绍'],
            ['../yf-vue-ui/install/', '安装'],
            ['../yf-vue-ui/start/', '快速开始'],
            ['../yf-vue-ui/logs/', '更新日志'],
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            ['../yf-vue-ui/searchSelect/', 'SearchSelect 选择器']
          ]
        }
      ],
      '/standard/': [
        {
          title: '前端开发规范',
          collapsable: false,
          children: [
            ['../standard/html/', 'html规范'],
            ['../standard/css/', 'css规范'],
            ['../standard/js/', 'js规范'],
            ['../standard/vue/', 'vue规范'],
            ['../standard/eslint/', 'eslint规范'],
          ]
        }
      ]
    }
  }
}