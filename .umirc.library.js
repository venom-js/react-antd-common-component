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
  ]
};
