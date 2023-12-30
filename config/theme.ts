/**
 * @description 主题相关配置
 * @link https://procomponents.ant.design/components/layout#layout-%E7%9A%84-token
 */
import { IConfigType } from "./config";
const theme = {
  // colorMenuBackground: "orange",
  sider: {
    // 侧边栏背景
    colorMenuBackground: "#F7F9FB",
    // 标题color
    // colorTextMenuTitle:"red",
    // link颜色
    colorTextMenu: "#969799",
    // 选中颜色
    colorTextMenuSelected: "#2071FF",
    // hover字体颜色
    colorTextMenuActive: "#2071FF",
    // 选中背景
    colorBgMenuItemSelected: "#E3EDFF",
  },
  header: {
    // 选中字体颜色
    colorTextMenuSelected: "#2071FF",
    // 选中背景
    colorBgMenuItemSelected: "rgb(240,245,255)",
  },
} as IConfigType["theme"];
export default theme;
