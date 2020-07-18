### 这个项目是我作为练习react及其相关技术所用，从项目的构建到相关知识的学习一点一点累积，在每一次commits中是我对react的一步步认识，从最开始的迷茫到现在的初步了解，发现了更多react有趣的地方。如果代码中有错误或者更多好的写法，望指正，不胜感激！

---
> git地址 (https://github.com/typhoonIscoming/react-prictise.git)

## 安装项目依赖
> npm i

## 启项目
>  npm run dev /  yarn start

# 如果想要自己单独配置webpack

- **因为create-react-app基于webpack做了内置的配置，并没有开放webpack.config.js的配置，所以如果想要自己做webpack的配置，必须先在项目中执行npm run eject** <br>
``npm run eject``<br>

执行完此命令之后，created-react-app会在你的根项目中创建config目录(如果你的项目中已经存在config的目录会执行失败，修改你的config目录的名字重新执行即可)，执行完之后，重新运行会报错。但是会有提示<br>

[!执行完命令之后，在项目中生成的config](./static/folder.png)

在项目根目录下新建.env的文件，并在其中写入``SKIP_PREFLIGHT_CHECK=true``<br>

再次执行``npm run dev``即可启动项目


