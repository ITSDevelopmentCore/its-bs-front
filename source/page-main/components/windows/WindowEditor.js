/**
 * React Imports
 */
import React from "react";

/**
 * MUI Imports
 */
import { Box } from "@mui/system";

import { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
// 👇 you need to import the reactflow styles
import 'reactflow/dist/style.css';


const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const tailwindDarkMode = "dark:from-neutral-900 dark:to-neutral-800"

export default function WindowEditor() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <Box className={"bg-gradient-to-t p-6 from-cyan-500 to-blue-500 h-screen " + tailwindDarkMode}>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                proOptions={{hideAttribution : true}}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
            </ReactFlow>

        </Box>
    )
}



