const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  // transpileDependencies: ['monaco-editor', 'style-loader'],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ttf$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['html', 'css', 'javascript', 'typescript'],
      }),
    ],
  },
};

// module.exports = {
//   transpileDependencies: ['monaco-editor', 'style-loader'],
//   configureWebpack: {
//     entry: {
//       'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
//       'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
//       'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
//       'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
//       'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.ttf$/,
//           use: ['file-loader'],
//         },
//       ],
//     },
//   },
// };
