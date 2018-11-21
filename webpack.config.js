const path = require('path')

// 将入口中引用的'.css'移动到分离的CSS文件中，webpack4以上安装extract-text-webpack-plugin@next
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 将打包后的文件自动插入out文件中, 用新的html文件替换掉原来的，所以输出的index.html中的内容会被清空
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 每次构建前清理dist文件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // entry string | object | array
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    // filename: [id].[name].[hash].[chunkhash].[query].xxx.js
    filename: '[id].[name].bundle.js',
    /** path.resolve([...paths])
     * @type {...paths} <string> 路径或路径片段的序列
     * return     {string} { 将路径或路径片段的序列处理为绝对路径 }
     * 将路径或路径片段的序列处理成绝对路径。
     */
    path: path.resolve(__dirname, 'dist') //__dirname: node中获取当前执行文件所在目录的完整目录名
  },
  // 模块配置
  module: {
    // 创建模块时，匹配请求的规则数组，对模块应用loader或修改解析器 parser
    rules: [
      {
        // 匹配resourse文件的条件
        test: /\.css$/,
        // 应用于模块的UseEntires列表
        use: ExtractTextPlugin.extract({ // extract: 从一个已存在的loader中提取一个extract loader
          fallback: 'style-loader', // loader 应用于额外的春款
          use: 'css-loader' // loader 用于资源转换成一个CSS导出模块
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 匹配图片
        use: [
          'file-loader' // 处理图片以及其路径
        ]
      },
      {
        test: /\.(woof|woof2|eot|ttf|otf)$/, // 匹配文字
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/, // 匹配csv/tsv
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/, // 匹配xml
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  // 插件配置
  plugins: [
  // 只传字符串，为css的名字，也可以传入对象做配置
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      title: 'Out Management'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  // 追踪警告,显示报错在哪一个原始文件内，也可以使用其他的配置
  devtool: 'inline-source-map',
  // 实时重新加载文件
  devServer: {
    contentBase: './dist',
    // 警示提醒
    clientLogLevel: 'warning'
  }
}
