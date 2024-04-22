

# Rsbuild VUE2.7

这是一个vue2 rsbuild的项目，启动速度超快,打包速度也是超级快！

（最近维护老项目把人恶心坏了，各种旧的依赖，过时，启动速度慢🤣，考虑使用过Vite，但VITE的迁移成本较大，逛逛1社区，发现了字节出的好东西，迫不及待的尝试了下）

<img src="https://gitee.com/ponyjie/mySou/raw/master/2024/04/upgit_20240422_1713800534.png" alt="image-20240422234205884" style="zoom:50%;" />



这点依赖，同时支持less,scss,对于老旧项目支持太友好了！废话不多说直接开始

## 💡 什么是 [Rsbuild](https://rsbuild.dev/zh/guide/start/index)？

- Rsbuild 是一个基于 Rspack 的 web 构建工具。

- Rsbuild 是一个增强版的 Rspack CLI，更易用、更开箱即用。

- Rsbuild 是 Rspack 团队对于 web 构建最佳实践的探索和实现。

- Rsbuild 是 Webpack 应用迁移到 Rspack 的最佳方案，减少 90% 配置，构建快 10 倍。

  

  

## 安装



> 官方建议node版本：（这里使用的是 20.12.2）
>
> 在开始使用前，你需要安装 [Node.js](https://nodejs.org/) >= 16 版本，推荐使用 Node.js LTS 版本。



```
# 安装 Node.js LTS
nvm install --lts
# 切换到 Node.js LTS
nvm use --lts
```

## 安装依赖

```
yarn install 

```

## 启动项目

```
yarn dev
```



![image-20240422233348475](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20240422233348475.png)

## 参考

[Rsbuild](https://rsbuild.dev/zh/)

> 最近已经更新6.0，部分配置可能已经更新不适用，但下面这些文章还是值得参考的

[rspack迁移vue-element-admin实践指南 - 掘金 (juejin.cn)](https://juejin.cn/post/7328213780310196264#heading-7)

[vue-element-admin: 使用rspack改造原始项目，原始业务代码没有怎么改动 (gitee.com)](https://gitee.com/luoriwusheng/vue-element-admin)

[如何评价字节 Web Infra 团队开源的 rspack？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/588449030/answer/3390521545)



## TOOD

- [ ] webpack 旧项目迁移

- [ ] 集成element-ui项目
- [ ] 集成andtv项目
- [ ] 集成electron项目