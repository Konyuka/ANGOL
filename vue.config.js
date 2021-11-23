module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.module
            .rule("pdf")
            .test(/\.pdf$/)
            .use("file-loader")
            .loader("file-loader");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(csv|xlsx|xls|pdf)$/,
                    loader: 'file-loader',
                    options: {
                        name: `files/[name].[ext]`
                    }
                }
            ],
        },
    },
}