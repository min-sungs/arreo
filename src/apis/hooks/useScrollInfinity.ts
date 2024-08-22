interface IUseScrollInfinity {
  clientHeight: number;
  scrollTop: number;
  scrollHeight: number;
}

/* 스크롤 계산기 */
export const calScrollEvent = ({scrollTop, scrollHeight, clientHeight}: IUseScrollInfinity) => {
  return (scrollHeight - clientHeight) <= scrollTop + 5;
}
