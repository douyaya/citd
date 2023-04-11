---
nav:
  title: Components
  path: /components
---

# Overview

概览组件

<code src="./demo/basic.tsx">基础使用</code>
<code src="./demo/other.tsx">其他配置</code>

## API

### Overview

| 参数     | 说明                                                                                      | 类型                     | 默认值 | 版本 |
| -------- | ----------------------------------------------------------------------------------------- | ------------------------ | ------ | ---- |
| data     | 传入数据                                                                                  | [DataItem](#DataItem)\[] | []     |      |
| bordered | 是否展示边框                                                                              | boolean                  | false  |      |
| 其他参数 | 同[Descriptions](https://ant-design.antgroup.com/components/descriptions-cn#descriptions) |                          |        |

### DataItem

描述每一项的数据对象

| 参数    | 说明         | 类型      | 默认值 | 版本 |
| ------- | ------------ | --------- | ------ | ---- |
| key     | 唯一标识     | string    | -      |
| label   | 内容的描述   | ReactNode | -      |
| value   | 内容         | ReactNode | -      |
| span    | 包含列的数量 | number    | 1      |
| linkUrl | 跳转链接     | string    | -      |
| extra   | 提示信息     | string    | -      |
