module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    // require('autoprefixer')({
                    //     browsers: ['Android >= 4.0', 'iOS >= 7']
                    // }),
                    require('postcss-pxtorem')({
                        rootValue: 75, // 换算的基数(设计图以iPhone6 750X1334为标准)
                        propList: ['*']
                        //selectorBlackList  : ['weui','mu'],  //此项过滤第三方UI不会被转化
                        //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                    })
                ]
            }
        }
    }
};
