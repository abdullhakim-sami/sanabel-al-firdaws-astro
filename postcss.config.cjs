// postcss.config.js
const postcssJitProps = require('postcss-jit-props');
const path = require('path');

module.exports = {
  purge: {
  options: {
    safelist: [/data-theme$/],
  },
},
  plugins: [
    postcssJitProps({
      files: [
        path.resolve(__dirname, 'node_modules/open-props/open-props.min.css'),


      ]
    }),
  ]
}