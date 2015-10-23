'use strict';


//docs md config
var path = '../docs/';
module.exports = {
  TDK: {
    title: 'Amaze UI | 中国首个开源 HTML5 跨屏前端框架',
    keywords: 'HTML, HTML5, CSS, CSS3, JS, JavaScript, framework, Amaze UI, front-end, frontend, web development, 前端框架, 开源, meizi, meizi UI, 妹子UI, Web Components',
    description: 'Amaze UI 是一个移动优先的跨屏前端框架。',
  }
  docs: [
    {
      src: 'amaze',
      data: {
        title: 'Amaze UI | 中国首个开源 HTML5 跨屏前端框架',
        desc: 'Amaze UI 是一个移动优先的跨屏前端框架。',
        buttons: '',
        head: ''
      },
      rename: 'index',
      dist: ''
    },
    {
      src: 'getting-started',
      data: {
        title: '开始使用',
        desc: 'Amaze UI 概览，下载、使用，模板示例，二次开发……',
        buttons: '',
        head: ''
      },
      rename: 'index',
      dist: '',
      modules: [
        {
          src: 'layouts'
          title: '布局示例',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '兼容性列表',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '更新记录',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: 'Web App 相关',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '收藏',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '项目结构',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: 'Web 组件简介',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: 'HTML/CSS 规范',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: 'JavaScript 规范',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: 'Web 组件规范',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '常见问题',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: 'Bug 反馈',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '遇见未来',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '感谢有你',
          titleEn: 'Layouts'
        },
        {
          src: 'layouts'
          title: '开发者说',
          titleEn: 'Layouts'
        }
      ]
    },
  ]
};