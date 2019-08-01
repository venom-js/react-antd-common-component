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
          {
            rel: 'stylesheet',
            href: '/public/css/reset.css'
          }
        ]
      }
    }
  }
};
