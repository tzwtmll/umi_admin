/**
 * @description 路由配置
 */
import { IConfigType } from "./config";
export const routes: IConfigType["routes"] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "首页",
    path: "/home",
    component: "./Home",
  },
  {
    name: "企业管理",
    path: "/companyAdmin",
    component: "./CompanyAdmin",
  },
  {
    name: "产品中心",
    path: "/productCenter",
    component: "./ProductCenter",
  },
  {
    name: "运营中心",
    path: "/operateCenter",
    component: "./OperateCenter",
  },
  {
    name: "财务中心",
    path: "/financeCenter",
    component: "./FinanceCenter",
  },
  {
    name: "消息中心",
    path: "/infoCenter",
    component: "./InfoCenter",
  },
  {
    name: "权限管理",
    path: "/authAdmin",
    component: "./AuthAdmin",
  },
  {
    name: "平台配置中心",
    path: "/configCenter",
    component: "./ConfigCenter",
  },
];
