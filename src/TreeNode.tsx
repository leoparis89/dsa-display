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
  React.useEffect(() => {
    if (node && node.left) {
      const nodeEl = document.getElementById(node.value.toString());
      const leftEl = document.getElementById(node.left.value.toString());
      console.log(nodeEl);
      console.log(leftEl);
      //   new LeaderLine(
      //     document.getElementById(node.value.toString()) as any,
      //     document.getElementById(node.left.toString()) as any
      //   );
    }

    // if (node && node.right) {
    //   new LeaderLine(node.value, node.right);
    // }
  }, []);

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
