export const useChargeMenuItems = () => {
  const Menus = [
    {
      title: '신용카드',
      payMethodTypeCode: '11',
      subTitle: '1% 포인트 추가 충전',
    },
    {
      title: '계좌이체',
      payMethodTypeCode: '21',
      subTitle: '2% 포인트 추가 충전',
    },
    {
      title: '무통장입금(수동처리)',
      payMethodTypeCode: '0',
      subTitle: '5% 포인트 추가 충전',
    },
    {
      title: '휴대폰 결제',
      payMethodTypeCode: '31',
      subTitle: 'ㅡ',
    },
  ];

  const amountCardItems = [
    [
      {
        left: {
          text: '1,000원 (25.0원/건)',
          value: 1000,
        },
        right: {
          text: '100,000원 (22.5원/건)',
          value: 100000,
        },
      },
      {
        left: {
          text: '5,000원 (24.8원/건)',
          value: 5000,
        },
        right: {
          text: '300,000원 (22.5원/건)',
          value: 300000,
        },
      },
      {
        left: {
          text: '10,000원 (23.6원/건)',
          value: 10000,
        },
        right: {
          text: '500,000원 (20.7원/건)',
          value: 500000,
        },
      },
      {
        left: {
          text: '30,000원 (23.6원/건)',
          value: 30000,
        },
        right: {
          text: '700,000원 (20.7원/건)',
          value: 700000,
        },
      },
      {
        left: {
          text: '50,000원 (23.6원/건)',
          value: 50000,
        },
        right: {
          text: '1,000,000원 (19.1원/건)',
          value: 1000000,
        },
      },
    ],
    [
      {
        left: {
          text: '1,000원 (25.0원/건)',
          value: 1000,
        },
        right: {
          text: '100,000원 (22.3원/건)',
          value: 100000,
        },
      },
      {
        left: {
          text: '5,000원 (24.5원/건)',
          value: 5000,
        },
        right: {
          text: '300,000원 (22.3원/건)',
          value: 300000,
        },
      },
      {
        left: {
          text: '10,000원 (23.4원/건)',
          value: 10000,
        },
        right: {
          text: '500,000원 (20.5원/건)',
          value: 500000,
        },
      },
      {
        left: {
          text: '30,000원 (23.4원/건)',
          value: 30000,
        },
        right: {
          text: '700,000원 (20.5원/건)',
          value: 700000,
        },
      },
      {
        left: {
          text: '50,000원 (23.4원/건)',
          value: 50000,
        },
        right: {
          text: '1,000,000원 (18.9원/건)',
          value: 1000000,
        },
      },
    ],
    [
      {
        left: {
          text: '1,000원 (25.0원/건)',
          value: 1000,
        },
        right: {
          text: '100,000원 (21.7원/건)',
          value: 100000,
        },
      },
      {
        left: {
          text: '5,000원 (23.8원/건)',
          value: 5000,
        },
        right: {
          text: '300,000원 (21.7원/건)',
          value: 300000,
        },
      },
      {
        left: {
          text: '10,000원 (22.7원/건)',
          value: 10000,
        },
        right: {
          text: '500,000원 (20.0원/건)',
          value: 500000,
        },
      },
      {
        left: {
          text: '30,000원 (22.7원/건)',
          value: 30000,
        },
        right: {
          text: '700,000원 (20.0원/건)',
          value: 700000,
        },
      },
      {
        left: {
          text: '50,000원 (22.7원/건)',
          value: 50000,
        },
        right: {
          text: '1,000,000원 (18.5원/건)',
          value: 1000000,
        },
      },
    ],
    [
      {
        left: {
          text: '1,000원 (25.0원/건)',
          value: 1000,
        },
        right: {
          text: '100,000원 (22.7원/건)',
          value: 100000,
        },
      },
      {
        left: {
          text: '5,000원 (25.0원/건)',
          value: 5000,
        },
        right: {
          text: '300,000원 (22.7원/건)',
          value: 300000,
        },
      },
      {
        left: {
          text: '10,000원 (23.8원/건)',
          value: 10000,
        },
        right: {
          text: '500,000원 (20.8원/건)',
          value: 500000,
        },
      },
      {
        left: {
          text: '30,000원 (23.8원/건)',
          value: 30000,
        },
        right: {
          text: '700,000원 (20.8원/건)',
          value: 700000,
        },
      },
      {
        left: {
          text: '50,000원 (23.8원/건)',
          value: 50000,
        },
        right: {
          text: '1,000,000원 (19.2원/건)',
          value: 1000000,
        },
      },
    ],
  ];

  return {
    Menus,
    amountCardItems,
  };
};
