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
  // React.useEffect(() => {
  //   if (node && node.left) {
  //     const nodeEl = document.getElementById(node.value.toString());
  //     const leftEl = document.getElementById(node.left.value.toString());
  //     new LeaderLine(nodeEl as any, leftEl as any, { path: "straight" });
  //   }

  //   if (node && node.right) {
  //     const nodeEl = document.getElementById(node.value.toString());
  //     const rightEl = document.getElementById(node.right.value.toString());
  //     new LeaderLine(nodeEl as any, rightEl as any, { path: "straight" });
  //   }
  // }, [node]);

  if (!node) {
    return <WrapperV />;
  }

  return (
    <WrapperV>
      <Label id={node.value.toString()}>{node.value}</Label>
      <Wrapper>
        <TreeNodeDisplay node={node.left} />
        <TreeNodeDisplay node={node.right} />
      </Wrapper>
    </WrapperV>
  );
};
