module.exports={
    Plugin:{
        'autoprefixer':{
            browsers:['Android >= 4.0','ios >= 8']
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
          },
    }
}