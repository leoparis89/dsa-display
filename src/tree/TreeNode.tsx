import styled from "@emotion/styled";
import React from "react";
import { TreeNode } from "./binarySearchTree";
import LeaderLine from "leader-line-new";

const WrapperV = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  width: "100%",
});

const Label = styled.div({
  borderRadius: "50%",
  background: "pink",
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 25,
  //   padding: 16,
});

export const TreeNodeDisplay: React.FC<{ node: TreeNode | null }> = ({
  node,
}) => {
  if (!node) {
    return <WrapperV />;
  }

  return (
    <WrapperV>
      <Label id={node.value.toString() + "-" + node._id}>{node.value}</Label>
      <Wrapper>
        <TreeNodeDisplay node={node.left} />
        <TreeNodeDisplay node={node.right} />
      </Wrapper>
    </WrapperV>
  );
};

const drawEdges = (node: TreeNode | null, edges: LeaderLine[]) => {
  if (!node) {
    return;
  }

  const nodeId = node.value.toString() + "-" + node._id;
  const leftId = node.left && node.left.value.toString() + "-" + node.left._id;
  const rightId =
    node.right && node.right.value.toString() + "-" + node.right._id;

  console.log(nodeId);
  const nodeEl = document.getElementById(nodeId.toString());

  if (nodeId && leftId) {
    const leftEl = document.getElementById(leftId);
    const line = new LeaderLine(nodeEl as any, leftEl as any, {
      path: "straight",
    });
    edges.push(line);
  }

  if (nodeId && rightId) {
    const rightEl = document.getElementById(rightId.toString());
    const line = new LeaderLine(nodeEl as any, rightEl as any, {
      path: "straight",
    });
    edges.push(line);
  }

  drawEdges(node.left, edges);
  drawEdges(node.right, edges);
};

export const TreeNodeWithEdges: React.FC<{ node: TreeNode | null }> = ({
  node,
}) => {
  const edges = React.useRef<LeaderLine[]>([]);

  React.useEffect(() => {
    edges.current.forEach((l) => l.remove());
    edges.current = [];
    drawEdges(node, edges.current);
  }, [node]);

  return <TreeNodeDisplay node={node} />;
};
