import {useState} from "react";

export const useMessageSendPublishHook = () => {
  // 각 li에 대한 토글 상태를 관리하는 객체
  const [liVisibilities, setLiVisibilities] = useState({
    buttonActive: false,
    // 발신인
    arrowOpen: false,
    // 예약 reservation
    reservationBtn: false,
    // 반복 repeat
    repeatBtn: false,
  });

  const [tab, setTab] = useState(0);
  const [bottModalSwitch, setBottModalSwitch] = useState(false);
  const [activeTag, setActiveTag] = useState<string|null>(null);

  /* 하단 이벤트 관련 */
  const [dataValueArr, setDateValueArr] = useState([
    {id: 0, number: 11111, title: '예약', deductioncache: 50000, mycache: 23560},
    {id: 1, number: 22222, title: '반복', deductioncache: 50000, mycache: 23560},
  ]);
  //  수신인 OpenArrowBtn 버튼 클릭 active
  const [buttonActive, setButtonActive] = useState(true);

  const toggleRecipientsGroup = () => {
    setLiVisibilities((prevVisibilities) => ({
      ...prevVisibilities,
      buttonActive: !prevVisibilities.buttonActive,
    }));
    setButtonActive(!buttonActive);
  };

  // 발신인
  const toggleSenderGroup = () => {
    setLiVisibilities((prevVisibilities) => ({
      ...prevVisibilities,
      arrowOpen: !prevVisibilities.arrowOpen,
    }));
  };

  const toggleHandler = (e: any, groupSeqNo:string) => {
    const parent = e.currentTarget.parentNode.parentNode;
    if (parent.classList.contains('active')) {
      setActiveTag(null)
    } else {
      setActiveTag(groupSeqNo);
    }
  };


  const toggleHand1 = (e: any) => {
    const parentTags = [];
    let parentNode = e?.currentTarget?.parentNode
    while (parentNode !== null) {
      parentTags.push(parentNode);
      parentNode = parentNode?.parentNode;
    }
    if (parentTags[1].classList.contains('active')) {
      parentTags[1].classList.remove('active');
    } else {
      parentTags[1].classList.add('active');
    }
  }

  const repeatCycle = [{label:'매주', value:'week'},{label:'매월', value:'month'}];
  const repeatDay = [{label:'월', value:'monday'},{label:'화', value:'tuesday'},{label:'수', value:'wednesday'},
    {label:'목', value:'thursday'},{label:'금', value:'friday'},{label:'토', value:'saturday'},{label:'일', value:'sunday'}];




  return {
    toggleHand1,
    dataValueArr,
    setDateValueArr,
    tab,
    setTab,
    bottModalSwitch,
    setBottModalSwitch,
    activeTag,
    toggleHandler,
    toggleSenderGroup,
    toggleRecipientsGroup,
    liVisibilities,
    buttonActive,
    repeatCycle,
    repeatDay

  }

}