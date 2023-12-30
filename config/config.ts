import { defineConfig } from "@umijs/max";
import defaultSettings from "./defaultSettings";
import proxy from "./proxy";
import { routes } from "./routes";
import theme from "./theme";
export type IConfigType = ReturnType<typeof defineConfig>;
export default defineConfig({
  layout: {
    ...defaultSettings,
  },
  // 路由配置
  routes,
  //   代理配置
  proxy,
  //  主题配置
  theme,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  npmClient: "pnpm",
  // 开启dva全局状态管理
  dva: {
    immer: { enableES5: true },
    extraModels: [],
  },
  verifyCommit: {
    allowEmoji: true,
  },
} as IConfigType);
