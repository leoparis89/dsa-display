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
  alignItems: "center",
  width: "100%",
});

export const TreeNodeDisplay: React.FC<{ node: TreeNode | null }> = ({
  node,
}) => {
  if (!node) {
    return <WrapperV />;
  }
  return (
    <WrapperV>
      {node.value}
      <Wrapper>
        <TreeNodeDisplay node={node.left} />
        <TreeNodeDisplay node={node.right} />
      </Wrapper>
    </WrapperV>
  );
};
