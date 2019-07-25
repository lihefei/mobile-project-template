# 项目介绍

> 和钉钉 h5 公共版

#### 软件架构

[vue-cli3](https://cli.vuejs.org/zh/) +
[axios](http://www.axios-js.com/) +
[webpack](https://www.webpackjs.com/) +
[es6](http://es6.ruanyifeng.com/) +
[scss](https://www.sass.hk/) +
[vant](https://youzan.github.io/vant/#/zh-CN/intro)

#### 安装与运行

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
or
npm run serve

# build
npm run build
```

#### 项目规范

-   [编码基本规范](http://172.16.0.101:3000/lihefei/frontend-development-specification/src/master/README.md)
-   [vue 风格指南](https://cn.vuejs.org/v2/style-guide/)
-   js 统一使用单引号
-   js 统一使用分号结束
-   统一使用 [ES6](http://es6.ruanyifeng.com/) 语法
-   统一使用 [Sass](http://www.sass.hk/) 语法
-   处理 this 作用域时统一命名为 that 例： `const that = this;`
-   组件需 jsdoc 格式注释作者、时间、功能说明等
-   文件夹及文件统一用中划线分割

#### 组件集成

-   组件统一存放路径 ./src/components
-   组件命名统一使用中划线 - 连接，例： login-form
-   组件导出统一通过 index.js 文件导出 ，例如 login-form 组件
-   组件 name 使用小驼峰命名
-   导入组件时使用大驼峰命名

```
|-- login-form
    |-- index.js
    |-- login-form.vue
```

#### 路由命名规范

-   name 与 path 用小驼峰命名方式
-   component 用大驼峰命名方式

```js
import LoginForm from 'login-form';
let router = new Router({
    routes: [
        {
            path: '/loginForm',
            name: 'loginForm',
            component: LoginForm
        }
    ]
});
```

#### 静态资源

-   不需要编译打包资源统一存放目录 ./public
-   需要编译静态资源统一存放路径 ./src/assets

#### 字体图标

-   统一存放目录 ./src/assets/fonts
-   例：阿里图标存放目录 ./src/assets/fonts/iconfont

#### npm 关键包

-   [vant](https://youzan.github.io/vant) UI 框架
-   [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem) px 转 rem，换算基数 75(设计图以 iPhone6 750X1334 为标准)
-   [axios](https://www.npmjs.com/package/axios) http 请求
-   [qs](https://www.npmjs.com/package/qs) post 参数序列化
-   [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

#### 编辑器工具安装

-   **Document This** 快捷生成 JSDoc 标准格式化注释
-   **vscode-fileheader** 快捷生成文件注释头
-   **Prettier - Code formatter** 格式化代码
-   **Image preview** 图片预览
-   **SVG Viewer** 预览 SVG 图片
-   **Vetur** 格式化 vue 代码
-   **Auto Rename Tag** 自动同步结束标签
-   **Bracket Pair Colorizer** 缩进标线

#### 业务模块说明

```
views
│
├── location 定位
├── footprint 足迹
├── message 消息
├── more 更多
├── user-info 孩子信息
├── safety-fence 安全守护
├── safety-fence 安全守护
├── phone-book 通讯录
└── class-schedule 课程表

```

#### 目录规范参考

```
Project
│
├── dist                       打包后的目录
│
├── node_modules               node的依赖包
│
├── public                     静态文件目录(不会被webpack处理)
│ ├── css                      第三方css文件，全局css文件
│ ├── fonts                    字体
│ ├── scss                     全局scss
│ ├── images                   图片
│ ├── favicon.ico              收藏夹图标
│ └── index.html               入口文件
│
├── src                        项目源码目录
│ │
│ ├── api                      接口文档文件夹
│ │ └── index.js                 接口文件
│ │
│ ├── assets                   资源目录，这里的资源会被webpack构建
│ │ ├── css                    第三方css文件，全局css文件
│ │ │ └── bass.css
│ │ ├── fonts                  字体
│ │ ├── scss                   全局scss
│ │ └── images                 图片
│ │
│ ├── components               公共组件目录
│ │ ├── loading
│ │ │ ├── index.js
│ │ │ └── loading.vue
│ │ └── trees
│ │  　├── index.js
│ │  　└── trees.vue
│ │
│ ├── http
│ │ └── index.js               接口请求封装
│ │
│ ├── utils                    常用工具类
│ │ ├── lib                    工具箱
│ │ └── index.js               统一输出
│ │
│ ├── mock                     mock数据目录
│ │
│ ├── views                    视图目录
│ │ ├── home
│ │ │ └──components            栏目组件
│ │ ├── error
│ │ │ ├── 401.vue              未授权
│ │ │ ├── 404.vue              未找到
│ │ │ └── 500.vue              服务器错误
│ │ │
│ │ └── login
│ │   ├── login.vue            登录
│ │   ├── retrievePassword.vue 找回密码
│ │   └── register.vue         注册
│ │
│ ├── router
│ │ └── index.js               路由配置
│ │
│ ├── store                    vuex状态管理
│ │ └── index.js
│ │
│ ├── App.vue                  根组件
│ │
│ └── main.js                  入口js文件
│
├── .browserslistrc            根据目标浏览器智能兼容配置
│
├── .editorconfig              定义代码格式
│
├── .eslintrc.js               eslint检测语法忽略配置
│
├── .gitignore                 git上传需要忽略的文件
│
├── babel.config.js            对新语法编译兼容配置
│
├── package-lock.json          锁定模模块包版本号配置信息
│
├── package.json               项目基本配置信息
│
├── postcss.config.js          CSS预编译器配置
│
├── vue.config.js              自定义配置
│
└── README.md                  项目介绍
```

## vscode 参考设置

```js
//settings.json
{
    "prettier.semi": true, //结束添加分号
    "prettier.singleQuote": true, //使用单引号
    "prettier.tabWidth": 4, //按tab键为四个空格
    "prettier.printWidth": 500, //换行字符个数
    "editor.mouseWheelZoom": true, //开启滚轮缩放
    "editor.tabSize": 4, //按tab键为四个空格
    "editor.formatOnType": true, //编辑时自动格式化
    "editor.formatOnSave": true, //保存时自动格式化
    "editor.wordWrap": "wordWrapColumn",
    "editor.wordWrapColumn": 500, //换行字符个数
    "vetur.format.options.tabSize": 4,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            "semi": true,
            "singleQuote": true
        },
        "js-beautify-html": {
            "wrap_attributes": "aligned-multiple"
        },
        "prettyhtml": {
            "printWidth": 500,
            "semi": true,
            "singleQuote": true,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
    "workbench.iconTheme": "vscode-icons",
    "window.zoomLevel": 1,

}
```
