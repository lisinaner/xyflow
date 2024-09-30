//这里从 react 库中导入了 createContext 和 useContext。createContext 用于创建上下文，而 useContext 是一个 Hook，用于在函数组件中访问上下文的值。
import { createContext, useContext } from 'react';

export const NodeIdContext = createContext<string | null>(null);
export const Provider = NodeIdContext.Provider;
export const Consumer = NodeIdContext.Consumer;

export const useNodeId = (): string | null => {
  const nodeId = useContext(NodeIdContext);
  return nodeId;
};

export default NodeIdContext;
