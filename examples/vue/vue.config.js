module.exports = {
    lintOnSave: false,
    devServer: {
        hot: true,
        liveReload: true
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: ['production', 'test'].includes(process.env.NODE_ENV),
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,
    },
}