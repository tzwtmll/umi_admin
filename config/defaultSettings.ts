/**
 * @description layout相关配置文件,需要在app.tsx和config中同时引入生效
 * @other 修改布局 https://procomponents.ant.design/components/layout 复制粘贴过来替换defaultSettings
 */
import { Settings } from '@ant-design/pro-layout';
import { IConfigType } from './config';
const defaultSettings: IConfigType['layout'] & Settings = {
  fixSiderbar: true,
  // 布局模式
  layout: 'mix',
  navTheme: 'light',
  contentWidth: 'Fluid',
  colorPrimary: '#2C57FE',
  title: '汇信昌工程管理系统',
  iconfontUrl: '//at.alicdn.com/t/c/font_4285040_3pju27rbm1g.js',
};
export default defaultSettings;
