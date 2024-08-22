import React, {useState} from 'react'
import * as S from './SoftPhone.styles.ts'
import ToolBarIndex from './Toolbar/ToolBarIndex.tsx'
import DisplayIndex from './DisplayGroups/DisplayIndex.tsx'

interface ISoftPhone {
  gridRef?: React.MutableRefObject<any>
}

const SoftPhone = ({gridRef}:ISoftPhone) => {

	const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
		<S.SoftPhoneContainer className={isActive ? 'SoftPhoneContainer active' : 'SoftPhoneContainer'}>
			<div className="openArrow">
				<button onClick={handleButtonClick}><svg xmlns="http://www.w3.org/2000/svg" width="105" height="208" viewBox="0 0 105 208" fill="none"><path d="M101.78 191.449L21.8501 110.636C20.0971 108.873 19.1138 106.493 19.1138 104.013C19.1138 101.533 20.0971 99.1524 21.8501 97.3891L101.763 16.5595C103.507 14.781 104.483 12.3947 104.483 9.9099C104.483 7.42513 103.507 5.03879 101.763 3.26034C100.907 2.38669 99.8837 1.69238 98.7539 1.21831C97.6241 0.744234 96.4103 0.5 95.1842 0.5C93.958 0.5 92.7442 0.744234 91.6144 1.21831C90.4846 1.69238 89.4616 2.38669 88.6057 3.26034L8.69311 84.0555C3.44201 89.3773 0.500001 96.5374 0.500001 103.996C0.500001 111.454 3.44201 118.614 8.69311 123.936L88.6057 204.731C89.4619 205.607 90.4859 206.304 91.6174 206.779C92.7488 207.255 93.9646 207.5 95.1928 207.5C96.4211 207.5 97.6368 207.255 98.7683 206.779C99.8997 206.304 100.924 205.607 101.78 204.731C103.524 202.952 104.5 200.566 104.5 198.081C104.5 195.596 103.524 193.21 101.78 191.432"/></svg></button>
			</div>
			<S.SoftPhoneInner>
				<S.SoftPhoneBlock>

					{/* 상단툴바 */}
					<ToolBarIndex />
					
					{/* 디스플레이 */}
					<DisplayIndex gridRef={gridRef}/>

				</S.SoftPhoneBlock>
			</S.SoftPhoneInner>
		</S.SoftPhoneContainer>
	);
};

export default SoftPhone
