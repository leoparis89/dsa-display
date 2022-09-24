import { Route, Routes } from "react-router-dom";
import "./App.css";

// import { TreeNodeDisplay } from "./tree/TreeNode";
// import { make } from "./tree/binarySearchTree";
import BinaryTreeScreen from "./tree/BinaryTreeScreen";
import HeapScreen from "./heap/HeapScreen";

function App() {
  // const root = make([8, 1, 3, 30, 20, 79, 2, 4, 11, 6, 9, 5, 7, 200, 150, 300]);
  // const levels = levelOrderTraversalWithNulls(tree);
  return (
    <>
      <Routes>
        <Route index={false} path="/bst" element={<BinaryTreeScreen />} />
        <Route index={false} path="/heap" element={<HeapScreen />} />
        <Route index={false} path="*" element={<BinaryTreeScreen />} />
      </Routes>
    </>
  );
}

export default App;
