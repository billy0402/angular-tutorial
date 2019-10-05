# Note

## 標準前端
HTML + CSS + JavaScript
- [英文版](https://www.w3schools.com)
- [中文版](http://www.w3school.com.cn/index.html)

## 前端框架
- [Angular](https://angular.io/)
- [React](https://reactjs.org/)
- [Vue](https://vuejs.org/)

## TypeScript
Angular + webpack + BABEL
- [英文版](https://www.typescriptlang.org/index.html)
- [中文版](https://www.tslang.cn/index.html)

component 元件
- class 邏輯
- view/template 畫面
```html
<title-bar></title-bar>
<body></body>
<footer></footer>
```

javascript
<br>
var a = 'abc'; # 弱型別

typescript
<br>
a: string = 'abc'; # 強型別

## Install [Angular CLI](https://github.com/angular/angular-cli)
```shell
$ npm install -g @angular/cli # 8.3.6
$ npm install bootstrap jquery popper.js
$ npm install ngx-pipes --save
# https://github.com/danrevah/ngx-pipes
$ npm install # use package.json install 

$ npm ls -g --depth=0
/Users/user/.nvm/versions/node/v10.16.3/lib
├── @angular/cli@8.3.6
├── @compodoc/compodoc@1.1.10
├── json-server@0.15.1
└── npm@6.9.0

$ nvm --version # 0.34.0
$ node --version # v10.16.3
$ npm --version # 6.9.0
$ ng --version # package version
# Angular CLI: 8.3.6
# Node: 10.16.3
# OS: darwin x64
# Angular: 8.2.8
# ... animations, common, compiler, compiler-cli, core, forms
# ... language-service, platform-browser, platform-browser-dynamic
# ... router

# Package                           Version
# -----------------------------------------------------------
# @angular-devkit/architect         0.803.6
# @angular-devkit/build-angular     0.803.6
# @angular-devkit/build-optimizer   0.803.6
# @angular-devkit/build-webpack     0.803.6
# @angular-devkit/core              8.3.6
# @angular-devkit/schematics        8.3.6
# @angular/cli                      8.3.6
# @ngtools/webpack                  8.3.6
# @schematics/angular               8.3.6
# @schematics/update                0.803.6
# rxjs                              6.4.0
# typescript                        3.5.3
# webpack                           4.39.2
```

## Angular command
```shell
$ ng new <project name> --routing
$ ng s # ng serve
# http://localhost:4200/
$ ng g c <component name> # ng generate component <component name>
$ ng g s <service name> # ng generate service <service name>
# React: redux, Vue:vuex
$ ng g m <module name> --routing # ng generate module <module name>
$ ng g c <component name> -m <module name> # lazy component
```

## [JSON server](https://github.com/typicode/json-server)
```shell
# json-server(show SQL on web)
$ npm install -g json-server
$ json-server --watch db.json
# http://localhost:3000/comments
$ ng g s http
```

## [compodoc](https://jonny-huang.github.io/angular/training/23_compodoc/)
```shell
$ npm install -g @compodoc/compodoc
$ compodoc -p tsconfig.json
$ compodoc -s
```

## update package
```shell
# angular cli(1.7.4 to 8.3.6)
$ npm uninstall -g @angular/cli
$ npm install @angular/cli@8.3.6
$ npm install
$ ng update
$ ng update @angular/cli --migrate-only --from=1

# angular core(5.2.11 to 8.3.6)
$ ng update @angular/core@8.3.6
$ npm audit fix
$ npm audit fix --force
$ npm audit
```

## DDT
1. 討論需求
2. 寫測試
3. 寫程式

## RESTful API
- get: localhost:3000/comments/id
- post: localhost:3000/comments
- put: localhost:3000/comments/id
- delete: localhost:3000/comments/id
```jQuery
$.post // 新增
$.delete // 刪除
$.put // 修改
$.get // 查詢
```

## Other Packages
- [PRIMENG](https://www.primefaces.org/primeng/#/)
- [Angular Console](https://angularconsole.com)
- [Customer Model Driven Validator](https://github.com/rsaenen/ngx-custom-validators)
- [Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=zh-TW)