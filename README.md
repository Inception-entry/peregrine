# Cesium Vue3 Demo

基于 Vue3 + Vite + pinia + Cesium 的三维地球项目。

## 功能特性

- 🌏 多种底图切换
  - 高德地图(含纠偏)
  - 腾讯地图(含纠偏)
  - 天地图
  - 影像图/矢量图切换
  
- 📏 测量工具
  - 距离测量
  - 面积测量 
  - 高程测量
  - 角度测量
  - 实时动态显示测量结果
  - 支持清除测量

- 🔍 地名地址搜索
  - 支持POI关键字搜索
  - 支持经纬度坐标定位
  - 支持地理编码和逆地理编码
  - 坐标系自动转换(WGS84/GCJ02)

- 🎯 场景控制
  - 全屏切换
  - 二三维场景切换
  - 场景状态保存与恢复
  - 相机视角保存与恢复
  - 键盘控制相机移动
  - 抗锯齿处理

- 🌐 地图优化
  - 支持高德/腾讯地图纠偏
  - 地图瓦片自动加载
  - 3DTiles模型加载
  - 性能优化

## 技术栈

- Vue 3.3.9
- Vite 5.0.4 
- Cesium 1.99
- Element Plus 2.4.3
- @turf/turf 7.2.0
- SASS

## 快速开始

### 环境要求

- Node.js >= 22.11.0
- npm >= 10.9.0


## 📁 项目结构

```
├── src/
│ ├── components/ # 组件
│ │ ├── cesium/ # Cesium相关组件
│ │ │ ├── CesiumButton.vue
│ │ │ └── CesiumDropdown.vue
│ │ └── Map.vue # 地图主组件
│ ├── utils/ # 工具类
│ │ ├── cesiumUtils.js # Cesium工具方法
│ │ ├── measureTools.js # 测量工具类
│ │ ├── cesiumLocal.js # 本地化工具
│ │ └── imageryProvider.js # 影像图层提供者
│ ├── config/ # 配置文件
│ │ ├── points.json # 点位配置
│ │ └── tiles.json # 3DTiles配置
│ └── assets/ # 静态资源
```

## 🎮 操作说明

### 地图操作
- 左键拖动: 平移视角
- 右键拖动: 旋转视角
- 滚轮: 缩放视角

### 无人机控制
- 开始飞行: 点击开始按钮
- 暂停飞行: 点击暂停按钮
- 重置飞行: 点击重置按钮
- 调整参数: 通过参数面板实时调整

## 🔧 自定义配置

### Vite 配置
项目使用 Vite 作为构建工具，配置文件位于 `vite.config.js`。

### Cesium 配置
Cesium 相关配置位于 `src/utils/cesiumUtils.js`，包括:
- 地图初始化参数
- 场景配置
- 相机参数

## 📝 开发指南

### 添加新的地图功能
1. 在 `src/components/cesium` 下创建新组件
2. 在 `Map.vue` 中引入并使用
3. 在 `cesiumUtils.js` 中添加相关工具方法


## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

[MIT](LICENSE)

## 🔗 相关链接

- [Vue 3 文档](https://v3.vuejs.org/)
- [Cesium 文档](https://cesium.com/docs/)
- [Element Plus 文档](https://element-plus.org/)
- [Turf.js 文档](https://turfjs.fenxianglu.cn/)

## 📧 联系方式

如有问题或建议，欢迎提issue或PR。
