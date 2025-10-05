import { type RouteConfig, route, index, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("layout/Layout.tsx", [
        index("home/home.tsx"),
        ...prefix("projects", [
            index("./projects/Projects.tsx"),
            route(":projectId", "./projects/project/Project.tsx")
        ])
    ])
] satisfies RouteConfig;
