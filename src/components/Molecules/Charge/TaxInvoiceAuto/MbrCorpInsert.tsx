import React from 'react';

import ATitle from '../../../Atom/ATitle';
import * as S from './style/MbrCorpInsert.styles';
import BaseButton from '../../../Atom/BaseButton';
import BaseInput from '../../../Atom/BaseInput';
import DaumPostcode from 'react-daum-postcode';
import useMbrCorpInsert from '../../../hooks/customs/charge/TaxInvoiceAuto/useMbrCorpInsert';


interface BuisnessInfoInsertProps {
  isInsertVisible: boolean;
  setIsInsertVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const MbrCorpInsert: React.FC<BuisnessInfoInsertProps> = ({ isInsertVisible, setIsInsertVisible }) => {

  const {
    modalState,
    closeOverlay,
    postCodeStyle,
    onCompletePost,
    register,
    errors,
    setModalState,
    handleSubmit,
    onSubmit
  } = useMbrCorpInsert(isInsertVisible, setIsInsertVisible);

  return (
    <>
      {modalState && (
        <S.ModalOverlay onClick={closeOverlay}>
          <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} autoClose />
        </S.ModalOverlay>
      )}

      <S.InfoContainer>
        <ATitle type='sub' text='사업자 정보' color='#0D42E5' />
        <S.BuisnessInfoForm>
          <S.Row>
            <S.Label>사업자등록번호(주민번호)</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                placeholder="10자리 또는 13자리 입력"
                {...register('corpNum', {
                  required: '해당 필드는 필수입니다.',
                })}

              />
              <S.ValidationError>{errors.corpNum?.message}</S.ValidationError>
            </S.InputBox>
          </S.Row>

          <S.Row>
            <S.Label>법인명</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('corpName', {
                  required: '해당 필드는 필수입니다.',
                })}
              />
              <S.ValidationError>{errors.corpName?.message}</S.ValidationError>
            </S.InputBox>
          </S.Row>

          <S.Row>
            <S.Label>대표명</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('corpCeo', {
                  required: '해당 필드는 필수입니다.',
                  minLength: {
                    value: 2,
                    message: '2글자 이상 입력해주세요.'
                  }
                }
                )}
              />
              <S.ValidationError>{errors.corpCeo?.message}</S.ValidationError>
            </S.InputBox>
          </S.Row>

          <S.Row className='businessAddress'>
            <S.Label>사업장주소</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='70px'
                height='25px'
                marginLeft='5px'
                disabled
                {...register('postCode', {
                  required: '해당 필드는 필수입니다.'
                })}
              />
              <BaseInput
                type='text'
                width='250px'
                height='25px'
                marginLeft='5px'
                disabled
                {...register('address')}
              />
              <BaseButton
                width="60px"
                height="25px"
                backgroundColor="#8C8C8C"
                color="#fff"
                marginLeft='5px'
                onClick={() => setModalState(true)}
              >
                검색
              </BaseButton>
              <S.InputAddresBox>
                <BaseInput
                  type='text'
                  width='210px'
                  height='25px'
                  marginLeft='5px'
                  {...register('address2')}
                />
                {errors.postCode && <S.ValidationError>{errors.postCode.message}</S.ValidationError>}
              </S.InputAddresBox>
            </S.InputBox>


          </S.Row>

          <S.Row className='gap'>
            <S.Label>업태 및 업종</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('corpType', {
                  required: '해당 필드는 필수입니다.'
                })}
              />
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('corpClass', {
                  required: '해당 필드는 필수입니다.'
                })}
              />
              {(errors.corpType && !errors.corpClass) || (!errors.corpType && errors.corpClass) || (errors.corpType && errors.corpClass) ? (
                <S.ValidationError>{errors.corpType?.message || errors.corpClass?.message}</S.ValidationError>
              ) : null}
            </S.InputBox>
          </S.Row>

          <S.Row>
            <S.Label>사업자등록증 첨부</S.Label>
            <S.InputBox className='fileCenter'>
              <BaseInput
                type='file'
                width='210px'
                height='30px'
                marginLeft='5px'
                {...register('corpFile', {
                  required: '해당 필드는 필수입니다.'
                })}
              />
            </S.InputBox>
          </S.Row>

          <S.Row>
            <S.Label>부서</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('managerDept', {
                  required: '해당 필드는 필수입니다.'
                })}
              />
              {errors.managerDept && <S.ValidationError>{errors.managerDept.message}</S.ValidationError>}
            </S.InputBox>
          </S.Row>

          <S.Row>
            <S.Label>담당자</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('managerName', {
                  required: '해당 필드는 필수입니다.',
                  minLength: {
                    value: 2,
                    message: '2글자 이상 입력해주세요.'
                  }
                }
                )}
              />
              {errors.managerName && <S.ValidationError>{errors.managerName.message}</S.ValidationError>}
            </S.InputBox>
          </S.Row>

          <S.Row>
            <S.Label>연락처</S.Label>
            <S.InputBox>
              <BaseInput
                type='text'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('managerPhone', {
                  required: '해당 필드는 필수입니다.',
                  minLength: {
                    value: 11,
                    message: '연락처를 확인해주세요.'
                  }
                }
                )}
              />
              <S.ValidationError>{errors.managerPhone?.message}</S.ValidationError>
            </S.InputBox>
          </S.Row>

          <S.Row>
            <S.Label>이메일</S.Label>
            <S.InputBox>
              <BaseInput
                type='email'
                width='210px'
                height='25px'
                marginLeft='5px'
                {...register('managerEmail', {
                  required: '해당 필드는 필수입니다.'
                })}
              />
              <S.ValidationError>{errors.managerEmail?.message}</S.ValidationError>
            </S.InputBox>
          </S.Row>

          <BaseButton
            type='submit'
            width="138px"
            height="39px"
            backgroundColor="#0D42E5"
            fontWeight="bold"
            color="#fff"
            fontSize='1.4rem'
            marginTop='40px'
            className='right'
            onClick={handleSubmit(onSubmit)}
          >저장하기</BaseButton>


        </S.BuisnessInfoForm>
      </S.InfoContainer>

    </>
  );
};

export default MbrCorpInsert;

