import React from 'react';

function ObjectComponent({ data }: any) {
  return (
    <object data={data} type="text/html" style={{ width: '100%', height: 'calc(100vh - 20rem)' }}>
      <p>해당 웹 페이지를 로드할 수 없습니다.</p>
    </object>
  );
}
export default ObjectComponent;
