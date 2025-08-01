import {index, route, type RouteConfig} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("/auth", "routes/auth.tsx"),
    route("/upload", "routes/Upload.tsx")
] satisfies RouteConfig;
