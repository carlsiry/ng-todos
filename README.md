## angular4-todos

根据 Meteor 官方的 todos 教程（angular.js 1.6）使用 angular4 重写

### 初始化配置

- tsconfig.json

```json
{
    "compilerOptions": {
//       "allowSyntheticDefaultImports": true,
//       "baseUrl": ".",
//       "declaration": false,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": [
        "dom",
        "es2015"
      ],
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "target": "es5",
//       "skipLibCheck": true,
//       "stripInternal": true,
      "noImplicitAny": true,
      "types": [
        "node",
        "meteor-typings",
        "@types/underscore"
      ]
    },
//     "include": [
//       "client/**/*.ts",
//       "server/**/*.ts",
//       "imports/**/*.ts"
//     ],
    "exclude": [
      "node_modules"
    ],
//     "compileOnSave": false,
//     "atom": {
//       "rewriteTsconfig": false
//     }
  }
```

- declarations.d.ts：用来支持一些非ts的第三方资源模块
```
declare module '*';
```

### Steps

#### create project
```
meteor create <name>
cd <name>
```

#### packages removed
```
meteor remove blaze-html-templates insecure autopublish tracker mobile-experience
```

#### packages added
```
meteor add angular2-compilers dynamic-import
```

```
meteor npm install zone.js rxjs reflect-metadata es6-shim --save
```

```
meteor npm install angular2-meteor-polyfills @angular/{animations,common,compiler,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router} --save
```
