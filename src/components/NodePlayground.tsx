import React, { useCallback, memo } from "react";
import {
    ReactFlow,
    Controls,
    Background,
    BackgroundVariant,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    Position,
    type Node,
    type Edge,
    type NodeProps,
    type Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { m } from "motion/react";
import {
    Type,
    ImageIcon,
    Maximize2,
    Palette,
    Download,
    Video,
} from "lucide-react";

/* ─── Custom Node ─── */
type WeavyNodeData = {
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    accent: string;
};

const WeavyNode = memo(function WeavyNode({
    data,
}: NodeProps<Node<WeavyNodeData>>) {
    const IconComponent = data.icon;
    return (
        <div
            className="relative px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border-2 shadow-lg min-w-[180px] transition-colors"
            style={{ borderColor: data.accent }}
        >
            <Handle
                type="target"
                position={Position.Left}
                className="!w-3 !h-3 !border-2 !border-zinc-300 dark:!border-zinc-600 !bg-white dark:!bg-zinc-800"
            />
            <div className="flex items-center gap-3 mb-1">
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: data.accent + "22" }}
                >
                    <IconComponent
                        className="w-4 h-4"
                        style={{ color: data.accent } as React.CSSProperties}
                    />
                </div>
                <span className="text-sm font-bold text-black dark:text-white">
                    {data.label}
                </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug pl-11">
                {data.description}
            </p>
            <Handle
                type="source"
                position={Position.Right}
                className="!w-3 !h-3 !border-2 !border-zinc-300 dark:!border-zinc-600 !bg-white dark:!bg-zinc-800"
            />
        </div>
    );
});

const nodeTypes = { weavy: WeavyNode };

/* ─── Initial Graph ─── */
const initialNodes: Node<WeavyNodeData>[] = [
    {
        id: "1",
        type: "weavy",
        position: { x: 0, y: 120 },
        data: {
            label: "Text Prompt",
            description: "Natural language input",
            icon: Type,
            accent: "#A78BFA",
        },
    },
    {
        id: "2",
        type: "weavy",
        position: { x: 280, y: 30 },
        data: {
            label: "Image Gen",
            description: "Stable Diffusion XL",
            icon: ImageIcon,
            accent: "#D9F99D",
        },
    },
    {
        id: "3",
        type: "weavy",
        position: { x: 280, y: 220 },
        data: {
            label: "Video Synthesis",
            description: "Minimax temporal AI",
            icon: Video,
            accent: "#67E8F9",
        },
    },
    {
        id: "4",
        type: "weavy",
        position: { x: 560, y: 30 },
        data: {
            label: "Upscale 4×",
            description: "Real-ESRGAN enhancer",
            icon: Maximize2,
            accent: "#FDE68A",
        },
    },
    {
        id: "5",
        type: "weavy",
        position: { x: 560, y: 220 },
        data: {
            label: "Style Transfer",
            description: "Apply artistic style",
            icon: Palette,
            accent: "#F9A8D4",
        },
    },
    {
        id: "6",
        type: "weavy",
        position: { x: 840, y: 120 },
        data: {
            label: "Export",
            description: "PNG / MP4 / WebP",
            icon: Download,
            accent: "#86EFAC",
        },
    },
];

const initialEdges: Edge[] = [
    {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#A78BFA", strokeWidth: 2 },
    },
    {
        id: "e1-3",
        source: "1",
        target: "3",
        animated: true,
        style: { stroke: "#A78BFA", strokeWidth: 2 },
    },
    {
        id: "e2-4",
        source: "2",
        target: "4",
        animated: true,
        style: { stroke: "#D9F99D", strokeWidth: 2 },
    },
    {
        id: "e3-5",
        source: "3",
        target: "5",
        animated: true,
        style: { stroke: "#67E8F9", strokeWidth: 2 },
    },
    {
        id: "e4-6",
        source: "4",
        target: "6",
        animated: true,
        style: { stroke: "#FDE68A", strokeWidth: 2 },
    },
    {
        id: "e5-6",
        source: "5",
        target: "6",
        animated: true,
        style: { stroke: "#F9A8D4", strokeWidth: 2 },
    },
];

/* ─── Playground Section ─── */
export function NodePlayground() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) =>
            setEdges((eds) =>
                addEdge(
                    { ...params, animated: true },
                    eds
                )
            ),
        [setEdges]
    );

    return (
        <section className="py-32 bg-zinc-100/50 dark:bg-zinc-900/50 transition-colors">
            <div className="max-w-[1920px] mx-auto px-6">
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 text-black dark:text-white">
                        Build your creative{" "}
                        <span className="text-electric-purple">pipeline</span>
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Drag nodes, connect edges, and visualize how Manchino chains AI models
                        into powerful creative workflows.
                    </p>
                </m.div>

                <m.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="h-[500px] rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-white dark:bg-zinc-950"
                >
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        fitView
                        fitViewOptions={{ padding: 0.3 }}
                        proOptions={{ hideAttribution: true }}
                    >
                        <Controls
                            className="!bg-white dark:!bg-zinc-900 !border-zinc-200 dark:!border-zinc-800 !rounded-xl !shadow-lg [&>button]:!bg-white dark:[&>button]:!bg-zinc-900 [&>button]:!border-zinc-200 dark:[&>button]:!border-zinc-800 [&>button]:!text-zinc-600 dark:[&>button]:!text-zinc-400"
                        />
                        <Background
                            variant={BackgroundVariant.Dots}
                            gap={20}
                            size={1}
                            className="!bg-zinc-50 dark:!bg-zinc-950"
                            color="#d4d4d8"
                        />
                    </ReactFlow>
                </m.div>
            </div>
        </section>
    );
}
