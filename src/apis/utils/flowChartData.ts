// import { Node, Edge } from "reactflow";

// export const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];
// export const initialNodes: Node[] = [
//   { id: "1", data: { label: "Node 1" }, position: { x: 5, y: 5 } },
//   { id: "2", data: { label: "Node 2" }, position: { x: 5, y: 100 } },
// ];

export const autoGreetingMenuList = [
  { type: 'LINK', s015Type: 'LINK_SMS', text: '문자발송' },
  { type: 'LINK', s015Type: 'LINK_URL_SMS', text: '웹링크 발송' },
  { type: 'ROUTE', s015Type: 'ROUTE', text: '착신전환' },
  { type: 'READ', s015Type: 'READ', text: '안내멘트' },
  { type: 'VMS', s015Type: 'VMS', text: '음성녹음 받기' },
];

export const itemActionsForNonMember = [
  { type: 'VMS', s015Type: 'VMS', text: '음성녹음 받기' },
  { type: 'ROUTE', s015Type: 'ROUTE', text: '착신전환' },
  { type: 'READ', s015Type: 'READ', text: '안내멘트' },
];
