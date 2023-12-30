// 运行时配置

import type { RunTimeLayoutConfig } from "@umijs/max";
import defaultSettings from "../config/defaultSettings";
import theme from "../config/theme";
// 请求配置
export { request } from "../config/request";
export async function getInitialState(): Promise<{ name: string }> {
  // 只执行一次，用于获取用户基础信息，如角色、权限、菜单
  return { name: "@umijs/max" };
}
interface Props {
  // getInitialState 函数返回的数据
  initialState: {
    name?: string;
  };
}
export const layout: RunTimeLayoutConfig = ({ initialState }: Props) => {
  return {
    logo: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
    siderWidth: 180,
    //  路由展示页面颜色
    contentStyle: {
      padding: 20,
      // backgroundColor: "#F7F8FA",
      backgroundColor: "orange",
      height: "calc(100vh - 56px)",
    },
    menu: {
      locale: false,
    },
    menuDataRender: (menuData) => {
      // 权限过滤
      return menuData;
    },
    childrenRender(children) {
      // 路由渲染根节点
      return <div>{children}</div>;
    },
    // 主题配置
    token: theme,
    //  同步config
    ...defaultSettings,
  };
};
