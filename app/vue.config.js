module.exports = {
    devServer: {
        port: 3301,
        proxy: {
            '/apis': {
                target: 'http://www.softeem.xin/maoyanApi/',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
