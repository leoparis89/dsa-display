import styled from "@emotion/styled";
import React from "react";
import { TreeNode } from "./binarySearchTree";

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
  width: 50,
  height: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
      <Label>{node.value}</Label>
      <Wrapper>
        <TreeNodeDisplay node={node.left} />
        <TreeNodeDisplay node={node.right} />
      </Wrapper>
    </WrapperV>
  );
};
