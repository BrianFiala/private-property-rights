const { resolve } = require('path')

const createServerStyleSheets = (env) => () => {
  if (!env.ssr) {
    let entry = resolve(env.dest, './ssr-build/ssr-bundle.js')
    return require(entry).createCss()
  }
}

export default (config, env, helpers) => {
  // // Define a `process.env.SSR` boolean constant:
  // const DefinePlugin = helpers.getPluginsByName(config, "DefinePlugin")[0]
  // DefinePlugin.plugin.definitions['process.env.SSR'] = String(env.ssr)

  const createCss = createServerStyleSheets(env)
  const plugins = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')
  plugins.forEach((p) => {
    p.plugin.options.css = createCss
  })
}