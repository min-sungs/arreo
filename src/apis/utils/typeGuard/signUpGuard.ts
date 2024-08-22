export interface AgreementProps {
  id: number;
  checkLabel: string;
  children: string;
  contents: string;
}

export interface SignUpDataProps {
  element: AgreementProps;
  checkItemHandler: (e: string, isChecked: any) => void;
  checked: any;
}

export interface AgreementButtonProps {
  BackGroundColor: string;
  Color: string;
}

export interface SignUpProcesseEllipseProps {
  BackGroundColor: string;
}
export interface SignUpProcesseNameProps {
  Color: string;
}

export interface SignUpInputProps {
  signUpInputType: string;
  signUpInputWidth: string;
  signUpInputHeight: string;
}

export interface StyleSignUpInputProps {
  signUpInputWidth: string;
  signUpInputHeight: string;
}
