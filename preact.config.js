const { resolve } = require('path')

const createServerStyleSheets = (env) => ({url}) => {
  if (!env.ssr) {
    let entry = resolve(env.dest, './ssr-build/ssr-bundle.js')
    return require(entry).createCss(url)
  }
}

export default (config, env, helpers) => {
  const createCss = createServerStyleSheets(env)
  const plugins = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')
  plugins.forEach((p) => {
    p.plugin.options.css = createCss
  })
}