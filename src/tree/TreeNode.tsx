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
  const nodeVal = node?.value;
  const leftVal = node?.left?.value;
  const rightVal = node?.right?.value;

  React.useEffect(() => {
    if (nodeVal && leftVal) {
      const nodeEl = document.getElementById(nodeVal.toString());
      const leftEl = document.getElementById(leftVal.toString());
      new LeaderLine(nodeEl as any, leftEl as any, { path: "straight" });
    }

    if (nodeVal && rightVal) {
      // console.log("draw", node.value.toString(), rightVal.toString());
      const nodeEl = document.getElementById(nodeVal.toString());
      const rightEl = document.getElementById(rightVal.toString());
      new LeaderLine(nodeEl as any, rightEl as any, { path: "straight" });
    }
  }, [nodeVal, leftVal, rightVal]);

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
