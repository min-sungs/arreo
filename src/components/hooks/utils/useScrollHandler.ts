// import {useCallback, useRef} from "react";
//
// export const useScrollHandler = () => {
//
//     const tableRef = useRef<any>(null);
//
//     const supportsPassive = false;
//
//
//     const keys:any = {37: 1, 38: 1, 39: 1, 40: 1};
//     const wheelOpt:any = supportsPassive ? { passive: false } : false;
//     const wheelEvent:any = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
//
//
//     const preventDefault = (e:any) => {
//       e.preventDefault();
//     }
//
//
//     const preventDefaultForScrollKeys = (e:any) => {
//       if(keys[e.keyCode]) {
//         preventDefault(e);
//           return false;
//       }
//       return true;
//     }
//
//   let scrollPosition = 0;
//   const lockScroll = useCallback(() => {
//     // for IOS safari
//     scrollPosition = window.pageYOffset;
//     document.body.style.overflowY = 'hidden';
//     document.body.style.position = 'fixed';
//     document.body.style.top = `-${scrollPosition}px`;
//     document.body.style.width = '100%';
//     document.body.style.paddingBottom = '250px'
//   }, []);
//
//   const openScroll = useCallback(() => {
//     // for IOS safari
//     document.body.style.removeProperty('overflow');
//     document.body.style.removeProperty('position');
//     document.body.style.removeProperty('top');
//     document.body.style.removeProperty('width');
//     document.body.style.removeProperty('padding');
//
//     window.scrollTo(0, scrollPosition);
//   }, []);
//
//
//     // const disableScroll = () => {
//     //   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//     //   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//     //   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//     //   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
//     // }
//     //
//     // const enableScroll = () => {
//     //   window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     //   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
//     //   window.removeEventListener('touchmove', preventDefault, wheelOpt);
//     //   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
//     // }
//
//
//   return {
//     tableRef,
//     lockScroll,
//     openScroll
//     // disableScroll,
//     // enableScroll
//   }
// }