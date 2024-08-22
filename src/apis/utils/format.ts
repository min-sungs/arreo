export default function isValidPhoneNumber(phoneNumber: string) {
  // 한국 전화번호 및 휴대폰 번호 패턴 (예: 01012345678, 021234567)
  if (phoneNumber.length === 11) {
    const pattern = /^01(?:0|1|[6-9])(?:\d{7}|\d{8})$|^\d{1,2}\d{2,3}\d{4}$/;
    return pattern.test(phoneNumber);
  }
  return false;
}
