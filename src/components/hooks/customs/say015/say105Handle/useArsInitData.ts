interface IUseArsInitData {
  id: string;
}
export const useArsInitData = ({ id }: IUseArsInitData) => {
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
  /* 음성사서함 초기 JSON FILE */
  const initJsonData = {
    id: 'root',
    parameter: '',
    target: { type: 'READ', level: '00000000000_tts_intro_campaign.wav' },
    source: { type: 'VALUE', userinput: 'none' },
    s015Data: initialS015Data,
    next: [
      {
        id: '1',
        parameter: '',
        target: {
          type: 'BLANK_ADD',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: '1',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '2',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '3',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '4',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '5',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '6',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '7',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '8',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '9',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '0',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '*',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
      {
        id: '#',
        parameter: '',
        target: {
          type: 'BLANK',
          level: '',
        },
        source: {
          type: 'VALUE',
          userinput: 'none',
        },
        s015Data: {
          title: '',
          action: '',
          type: '',
          icon: '',
          ttsText: '',
        },
        next: [],
      },
    ],
  };

  // 안내멘트일 경우 next 초기 데이터
  const initNextData = [
    {
      id: `${id}1`,
      parameter: '',
      target: {
        type: 'BLANK_ADD',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: '1',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}2`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}3`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}4`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}5`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}6`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}7`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}8`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}9`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}0`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}*`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
    {
      id: `${id}#`,
      parameter: '',
      target: {
        type: 'BLANK',
        level: '',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
  ];

  /* 문자발송일 경우 해당 데이터를 next 에 넣기 */
  const initSmsNextData = [
    {
      id: '1-',
      parameter: '',
      target: {
        type: 'PLAY',
        level: '00000000000_default_LINK_SMS.wav',
      },
      source: {
        type: 'VALUE',
        userinput: 'none',
      },
      s015Data: {
        title: '',
        action: '',
        type: '',
        icon: '',
        ttsText: '',
      },
      next: [],
    },
  ];

  return {
    initialS015Data,
    initNextData,
    initJsonData,
    initSmsNextData,
  };
};
