module.exports={
    chainWebpack: config => {
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main-prod.js')
        }),
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
        })
    },
    pages: {
        index: {
            entry: 'src/main-dev.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors','chunk-common','index']
        }
    }
}