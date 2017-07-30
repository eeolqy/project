node 支持 import 


npm init


npm install babel-cli --save-dev


npm install babel-preset-es2015 --save-dev


新建 .babelrc的文件

```
{
  "presets": ["es2015"], 
  "plugins": []
}
```
在packjson文件里面的script加

```
"dev": "babel-node  test.js"
```