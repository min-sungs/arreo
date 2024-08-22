import { NextItem, use015ARS } from 'components/hooks/customs/say015/say015ARS/use015ARS';
import React from 'react';

const TestComponent: React.FC = () => {
  const { handleAddButtonClick, postArsTree } = use015ARS({});

  const renderNodes = (nodes: NextItem[], depth: number) => {
    return nodes.map((node) => (
      <div key={node.id} style={{ marginLeft: depth * 20 }}>
        ID: {node.id}
        {/* <button onClick={() => handleAddButtonClick(node)}>하위트리 추가버튼</button> */}
        {node.next.length > 0 && renderNodes(node.next, depth + 1)}
      </div>
    ));
  };

  return (
    <div>
      {/* <h2>ARS Tree 추가</h2>
      <div>
        <button onClick={() => handleAddButtonClick(postArsTree)}>인삿말</button>
        {renderNodes(postArsTree.next, 1)}
      </div> */}
    </div>
  );
};

export default TestComponent;
