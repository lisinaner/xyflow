import { shallow } from 'zustand/shallow';

import { useStore } from '../hooks/useStore';
import type { Edge, ReactFlowState } from '../types';

const edgesSelector = (state: ReactFlowState) => state.edges;

/**
 * Hook for getting the current edges from the store.
 *
 * @public
 * @returns An array of edges
 * 所有钩子的数据来源都来自zustand的状态管理,里面的返回值
 */
export function useEdges<EdgeType extends Edge = Edge>(): EdgeType[] {
  const edges = useStore(edgesSelector, shallow) as EdgeType[];

  return edges;
}
