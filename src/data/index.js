import { getRoutes, getNavigation } from "@/data/utils";

export const SITE_PATH = "sanford-outdoor-website";

const MASTER_ROUTES = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/home"),
    hidden: true,
  },
  {
    path: "/about",
    label: "about us",
    component: () => import("@/views/about"),
    hidden: false,
  },
  {
    path: "/about/team",
    label: "meet our team",
    component: () => import("@/views/about/team"),
    hidden: false,
  },
  {
    path: "/about/history",
    label: "our history",
    component: () => import("@/views/about/history"),
    hidden: false,
  },
  {
    path: "/boards",
    label: "our boards",
    component: () => import("@/views/boards"),
    hidden: false,
  },
  {
    path: "/blog",
    label: "blog",
    component: () => import("@/views/blog"),
    hidden: false,
  },
  {
    path: "/blog/:blog_id",
    label: "blog/:blog_id",
    component: () => import("@/views/blog/:blog_id"),
    hidden: false,
  },
  {
    path: "/news",
    label: "news",
    component: () => import("@/views/news"),
    hidden: false,
  },
  {
    path: "/news/:news_id",
    label: "news/:news_id",
    component: () => import("@/views/news/:news_id"),
    hidden: false,
  },
  {
    path: "/contact",
    label: "contact us",
    component: () => import("@/views/contact"),
    hidden: false,
  },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);

export const posts = [
  {
    id: "1",
  },
];
