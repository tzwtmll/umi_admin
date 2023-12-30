import { IConfigType } from "./config";
const { TARGET_API, PATH_REWRITE_API } = process.env;
export default [
  {
    context: "/proxy",
    target: TARGET_API,
    changeOrigin: true,
    pathRewrite: { [`^/proxy`]: PATH_REWRITE_API },
  },
] as IConfigType["proxy"];
