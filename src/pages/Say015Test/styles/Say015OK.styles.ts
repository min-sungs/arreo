import styled from 'styled-components';

export const Say015OKWrap = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#F8F9FD;
    width:75%;
    @media screen and (max-width:1440px) {
        width:100%;
    }
`

export const Say015OKLeftZone = styled.div`
    
    width:100%;
    min-height:calc(100vh - 73px);
    box-sizing:border-box;
    @media screen and (max-width:1440px) {
	    width: 100%;
    }
`

export const HeadTextZone = styled.div`
    display:flex;
    align-items:flex-end;
    gap:0.8rem;
`

export const NumberText = styled.p`
    font-size:2rem;
    font-weight:600;
    color:#191919;
    span {color:#0D42E5;}
`

export const TimeWrap = styled.p`
    font-size:1.3rem;
    font-weight:600;
    color:#919091;
`

export const MessageContent = styled.div`
    display:flex;
    justify-content:space-between;
    gap:1.2rem;
    margin:1.8rem 0 4.4rem 0;
    height:calc(100vh - 291px);
    line-height:3rem;
    font-size: 1.3rem;
    font-weight:500;
    border-radius:2rem;
    overflow:auto;
    color:#191919;
    // overflow 스크롤 디자인
    ::-webkit-scrollbar {
        width:4px;
        background-color:#D6D6DC;
        border-radius:4rem;
    }
    /* scroll thumb */
    ::-webkit-scrollbar-thumb{
        background-color:#98999A;
        border-radius:4rem;
    }
`

export const MessageImageWrap = styled.div`
    position:relative;
    min-width:min-content;
    height:min-content;
    width:auto;
    border-radius:1rem;
    overflow:hidden;
    resize:block;
    &::-webkit-resizer {
        
        background-color:red;

    }
    img {height:100%;object-fit:contain}
`

export const ViewLargerBtn = styled.button`
    position:absolute;
    right:1rem;
    bottom:2rem;
    padding:0 1rem;
    width:8.6rem;
    height:3rem;
    font-size:1.3rem;
    font-weight:700;
    outline:none;
    border-radius:5rem;
    background:rgba(244, 244, 247, 0.50);
    background-image:url('/img/say015ok/icon/look.svg');
    background-repeat:no-repeat;
    background-position:center right 1rem;
    background-size:1.3rem;
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    box-sizing:border-box;
    border:none;
    color:#fff;
    text-align:left;
    cursor:pointer;
`

export const MessageTextWrap = styled.div`
    padding:2rem;
    width:100%;
    border-radius:20px;
    background:#E8E8EF;
    box-sizing:border-box;

`
export const MessageText = styled.p`
    padding-right:1rem;
    height:fill-available;
    font-size:1.3rem;
    font-weight:500;
    line-height:3rem;
    box-sizing:border-box;
    overflow-y:auto;
    color:#191919;
    // overflow 스크롤 디자인
    ::-webkit-scrollbar{
        width:4px;
        background-color:#D6D6DC;
        border-radius:4rem;
    }
    /* scroll thumb */
    ::-webkit-scrollbar-thumb{
        background-color:#98999A;
        border-radius:4rem;
    }
`


/* Start MusicPlayer */
export const MusicPlayerWrap = styled.div`
    position:relative;
    width:calc(100% - 40px);
    margin:0 auto;
    margin-top:5.2rem;
  
    /* input 커스텀 */
    input[type=range] {
        padding:0;
        margin:0;
        width:100%;
        height:4px;
        background-color:#D6D6DC;
        accent-color:red;
        appearance:none;
        -webkit-appearance: none;
        border-color: transparent;
        border-radius:20px;
        color:transparent;
        box-sizing:border-box;
        &:focus {outline:none;}
        &::-webkit-slider-thumb {
            appearance:none;
            -webkit-appearance: none;
        }
        &::-ms-track {
            appearance:none;
            -webkit-appearance: none;
        }
    }
    
`

export const PlayRail = styled.div`
    position:absolute;
    left:0;
    top:4px;
    height:4px;
    background-color:#98999A;
    border-radius:20px;
`

export const PlayerLine = styled.div`
    position:relative;
    height:4px;
    text-indent:-9999px;
    background-color:#C0C0C5;
    span {
        position:absolute;
        bottom:2rem;
        text-indent:0;
    }
`
export const PlayerTimeTextZone = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:6px;
    span {
        font-size: 13px;
        font-weight: 600;
        color:#7F7F81;
    }
`

export const PlayerStartTimeText = styled.span`
`

export const PlayerEndTimeText = styled.span`
`

export const BtnsZone = styled.div`
    display:flex;
    justify-content:center;
    gap:5.4rem;
    margin-top:2rem;
    height:30px;
    button {
        
        display:flex;
        align-items:center;
        justify-content:center;
        width:25px;
        outline:none;
        background-color:transparent;
        border:none;
        cursor:pointer;
        img {width:25px;}
        span {
            position:relative;
            top:3px;
        }
        box-sizing:border-box;
    }
`
export const Prev10Btn = styled.button`
    font-size:9px;
    font-weight:600;
    background:url('/img/say015ok/icon/10prev.svg') no-repeat center;
    span {right:1px;}
`

export const StartAndStopBtn = styled.button`
 
`

export const Next10Btn = styled.button`
    font-size:9px;
    font-weight:600;
    background:url('/img/say015ok/icon/10next.svg') no-repeat center;
    span {left:1px;}
`

/* End MusicPlayer */


/* Start Big Size Image Modal */
export const BigImageModalWrap = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
`

export const BigImageModalBox = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    min-width:min-content;
    min-height:min-content;

`

export const ModalCloseBtn = styled.button`
    position:absolute;
    right:-50px;
    top:0;
    outline:none;
    background-color:transparent;
    border:none;
    cursor:pointer;
`
/* End Big Size Image Modal */