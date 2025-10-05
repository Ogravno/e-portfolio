import type { Route } from "./+types/project";

export default function Project({
    params,
}: Route.ComponentProps) {
    return (
        <div>
            <h1>A project</h1>
            <h1>Project ID: {JSON.stringify(params)}</h1>
        </div>
    )
}