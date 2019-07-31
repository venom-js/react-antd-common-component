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
      },
      colors: {
        white: '#FFFFFF',
        grayExtraLight: '#EEF1F5',
        grayLight: '#CED4DE',
        gray: '#7D899C',
        grayDark: '#2D3747',
        grayExtraDark: '#1D2330',
        dark: '#13161F',
        blue: '#0B5FFF',
        skyBlue: '#1FB6FF'
      },
      styles: {
        body: {
          fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
          fontSize: 16,
          lineHeight: 1.6
        },
        container: {
          width: ['100%', '100%', 920],
          padding: ['20px', '0 40px 40px'],
          fontSize: '16px'
        }
      }
    },
    htmlContext: {
      head: {
        favicon: '',
        meta: [],
        links: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.bootcss.com/antd/3.20.7/antd.min.css'
          }
        ]
      }
    }
  }
};
