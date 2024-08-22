import { useState } from 'react';

export interface NextItem {
  id: string;
  parameter: string;
  target: {
    type: string;
    level: string;
  };
  source: {
    type: string;
    userinput: string;
  };
  s015Data: {
    title: string;
    action: string;
    type: string;
    icon: string;
    ttsText: string;
  };
  next: NextItem[]; // NextItem의 배열
}

const initialS015Data = {
  title: '',
  action: '인사말',
  type: 'READ',
  icon: 'mdi-dialpad',
  ttsText: '안녕하세요, 쎄이015 입니다.\n1번을 누르시면 음성메모 남기기로 연결합니다.',
  defaultPlayFile: {
    LINK_SMS: '00000000000_default_LINK_SMS.wav',
    LINK_HOOKING: '00000000000_default_LINK_HOOKING.wav',
    LINK_URL_SMS: '00000000000_default_LINK_URL_SMS.wav',
  },
};

const initialNext: NextItem[] = [];
interface ITest {
  setModalValue?: any;
}
export const use015ARS = ({ setModalValue }: ITest) => {
  const [postArsTree, setPostArsTree] = useState<NextItem>({
    id: 'root',
    parameter: '',
    target: { type: 'READ', level: '00000000000_tts_intro_campaign.wav' },
    source: { type: 'VALUE', userinput: 'none' },
    s015Data: initialS015Data,
    next: initialNext,
  });

  const generateNextItems = (parentId: string): NextItem[] => {
    const items: NextItem[] = [];
    const idOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

    for (const id of idOrder) {
      if (id === '1') {
        const newItemId = parentId === 'root' ? id : parentId + id;
        const newItem: NextItem = {
          id: newItemId,
          parameter: '',
          target: { type: 'BLANK_ADD', level: '' },
          source: { type: 'VALUE', userinput: 'none' },
          s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
          next: [],
        };
        items?.push(newItem);
      } else {
        const newItemId = parentId === 'root' ? id : parentId + id;
        const newItem: NextItem = {
          id: newItemId,
          parameter: '',
          target: { type: 'BLANK', level: '' },
          source: { type: 'VALUE', userinput: 'none' },
          s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
          next: [],
        };
        items?.push(newItem);
      }
    }
    return items;
  };

  // const handleAddButtonClick = (el: NextItem) => {
  //   // setModalValue('');
  //   const parentId = el.id; // Get parent node id
  //   const newItems: NextItem[] = generateNextItems(parentId); // 새로운 아이템들 생성
  //   el.next.push(...newItems); // 새로운 아이템들을 한 번에 추가
  // };

  const handleAddButtonClick = (el: NextItem) => {
    console.log(el);
    const test = el.id;
    const newItems: NextItem[] = generateNextItems(test); // 새로운 아이템들 생성
    // 현재 클릭한 노드의 userinput 값을 갱신하고 이전에 클릭한 노드의 userinput 값을 none으로 변경
    // setPostArsTree((prevTree) => {
    //   const updatedItems = prevTree.next.map((item) => {
    //     console.log(updatedItems);
    //     if (item.id === el.id) {
    //       // 현재 클릭한 노드의 userinput 값을 '1'로 변경
    //       return { ...item, source: { ...item.source, userinput: el.id.charAt(el.id.length - 1) } };
    //     }
    //     if (el.source.userinput === item.source.userinput) {
    //       // 이전에 클릭한 노드의 userinput 값을 'none'으로 변경
    //       return { ...item, source: { ...item.source, userinput: 'none' } };
    //     }
    //     return item;
    //   });
    //   return { ...prevTree, next: updatedItems };
    // });

    el.next.push(...newItems); // 새로운 아이템들을 한 번에 추가
  };

  return {
    handleAddButtonClick,
    initialS015Data,
    postArsTree,
  };
};
