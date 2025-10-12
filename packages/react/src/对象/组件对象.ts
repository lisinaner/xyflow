// import { NodeRenderer } from "../container/NodeRenderer";

import { NodesSelection } from "../components/NodesSelection";
import NodeWrapper from "../components/NodeWrapper";
import { builtinNodeTypes } from "../components/NodeWrapper/utils";
import { NodeRenderer } from "../container/NodeRenderer";


 const 组件对象={
    多节点渲染:NodeRenderer,
    节点包裹:NodeWrapper,
    内置节点:builtinNodeTypes,
    可见选区:NodesSelection
}