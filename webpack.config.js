//引入能够把编写的HTML编译到打包文件里的插件
const HtmlWebpack=require("html-webpack-plugin");
//引入一个能把css单独拿出来放在一个文件中的插件
const ExtractTxt=require("extract-text-webpack-plugin");
const webpack = require("webpack")

module.exports={  //webpack配置对象
    entry:"./src/main.js",//入口文件
    output:{//输出选项
         path:__dirname+"/build", //必须是绝对路径，输出的地址
         filename:"app.js" //一般为了版本回退方便，或者防止外链缓存造成用户操作的误差会在打包后的文件后面加上一些特殊的标识，例如：'app'+_Date.now()+'.js'或者app_[Hash].js
    },
    devServer:{   //热更新服务器的配置文件
        contentBase:"./build",   //服务开启的位置
        port:4000,//端口号
        host:"localhost", //域名
        historyApiFallback:true, //是否使用h5中的HISTROYapi
        proxy:{    //使用fetch方法跨域的配置
        	'/ele_api':{   //在URL中加入的特殊标识，当有这个标识出现的时候就替换成为目标域名中的东西
        		target:'https://restapi.ele.me',  //目标域名，替换页面中的域名
        		changeOrigin: true,  
        		pathRewrite:{
        			'^/ele_api':'' //再把特殊标识用空格替换
        		}
            }
        }
    },
    plugins:[ //配置插件都在这个地方
         new HtmlWebpack({
             template:"./src/index.html",//模板文件
             filename:"index.html" //编译后的文件名称
         }),
        new ExtractTxt({  //实例化的插件
            filename:"app.css", //抽出后存储在文件中
            allChunks:true  //是否抽出所有文件
        })
    ],
    module:{
        loaders:[
            //  {
            //     //配置能把css文件编译到页面
            //      test:/\.css$/,      //正则适配所有适合的文件
            //      loader:'style-loader!css-loader'//写入要用的到loader，顺序要反正写
            //  },
            //     //要让webpack能够编译scss,需要现在ruby环境下，先要下载npm i node-sass@4.0.0 -g,在局部下载npm i node-sass@4.0.0 -D,
            //   {
            //         test:/\.scss$/,      //正则适配所有适合的文件
            //         loader:'style-loader!css-loader!sass-loader'//写入要用的到loader，顺序要反正写
            //   }
            {
                test:/\.css$/,
                loader:ExtractTxt.extract({
                    fallback:'style-loader', //把代码抽出在style标签中
                    use:'css-loader'
                })//要使用的loader
             },
            {
               test:/\.scss$/,
                loader:ExtractTxt.extract({
                    fallback:'style-loader',
                    use:'css-loader!sass-loader'
                })//要使用的loader
            },
            //  {
            //     test:/\.js$/,
            //     exclude:__dirname+'/node_modules',
            //     loader:'jsx-loader'
            // }
            {
                //配置能编译es6和jsx文件
                test:/\.js$/,       
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015','react']
                 }
            }
        ]
    }
}