module.exports = {
  title: 'yufei的Vue组件库',
  description: '啥也别管，就是挣钱',
  head: [],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'yf-UI', link: '/yf-ui/' },
      { text: '开发规范', link: '/standard/' },
      { text: '百度', link: 'http://www.baidu.com' }
    ],
    sidebar: {
      '/yf-ui/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            ['../yf-ui/guid/', '介绍'],
            ['../yf-ui/install/', '安装'],
            ['../yf-ui/start/', '快速开始'],
            ['../yf-ui/logs/', '更新日志'],
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            ['../yf-ui/searchSelect/', 'SearchSelect 选择器']
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