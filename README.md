##### 创建步骤（空文件夹开始）
0. 关联git 仓库
```sh
git init // 生成本地git项目
git remote add origin XXXX //关联远程仓库 
```
0.1 在项目根目录下新建.gitignore文件，添加需要忽略的文件名
```sh
node_modules/
```
1. npm init 创建package.json
```sh
npm init // bush下yarn init 会报错，所以还是用npm init 来生产好了
```

2. 安装webpack和webpack-cli
```sh
    yarn add webpack webpack-cli
```

3.安装lodash // 模块化JS库，处理字符串和数组对象
```sh
yarn add lodash --dev
```

3. 安装css和html的loader并增加config配置 // 为了从JavaScript中import一个CSS文件
```sh
yarn add style-loader css-loader --dev
```

4. 安装ExtractTextWebpackPlugin并增加config配置 // 分离文件
```sh
yarn add extract-text-webpack-plugin --dev
```

5. 安装file-loader并增加config配置 // 处理图片、文字
```sh
yarn add file-loader --dev
```
