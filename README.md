# react-frame
基于前端技术一步一步搭建基础框架



# 使用技术

- react
- react-router
- antd
- mobx
- axios
- webpack



# 目录结构

src

- api：请求相关
- components：组件
- pages：页面
- routes：路由
- stores：数据
- utils：通用方法函数



# 生产依赖包

- react
- react-dom

# 开发依赖包

- webpack：打包工具
- webpack-cli：打包工具
- html-webpack-plugin：简单创建 HTML 文件，用于服务器访问
- babel：npm install --save-dev @babel/core @babel/cli @babel/preset-env

- @babel/preset-react：babel解析react语法



# webpack

- ## Loaders

  - 

- ## Plugins

  - html-webpack-plugin：简单创建 HTML 文件，用于服务器访问





# babel设置

npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill

webpack:

npm install --save-dev babel-loader @babel/core

通过babel-loader的方式进行配置

# 代码规范配置

# Todo：

- 创建html文件 done
- 使用loader翻译react语法 done
- 已引用，但未使用时，会打包进打包文件，使文件变得很大 
- 创建WebpackDevServer开发环境的配置



# 参考项目

- create-react-app
- taxchina