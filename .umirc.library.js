const css = require('styled-components');

module.exports = {
  // cjs: 'rollup',
  esm: 'rollup',
  cssModules: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  doc: {
    plugins: [],
    // theme: 'docz-theme-umi',
    external: ['react', 'react-dome', 'antd'],
    indexHTML: 'index.html',
    styles: {
      body: `
        font-size: 16px;
        line-height: 1.6;
        background: red;
      `
    },
    // menu: [{ name: '开始', route: '/'}],
    themeConfig: {
      // mode: 'moraga',
      // codemirrorTheme: 'dracula',
      showPlaygroundEditor: false,
      logo: {
        src:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        width: 40
      }
    },
    htmlContext: {
      head: {
        favicon: '',
        meta: [],
        links: [
          // {
          //   rel: 'stylesheet',
          //   href: 'https://cdn.bootcss.com/antd/3.20.7/antd.min.css'
          // }
          // {
          //   rel: 'stylesheet',
          //   href: 'http://211.159.185.85:8081/public/css/reset.css'
          // },
          {
            rel: 'stylesheet',
            href: '/public/css/reset.css'
          },
          {
            rel: 'stylesheet',
            href: 'https://cdn.bootcss.com/antd/3.20.7/antd.min.css'
          }
        ]
      }
    }
  }
};
