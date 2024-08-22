import React, { useState } from 'react';
import AmountHelp from '../../ServiceSignUp/AmountHelp/AmountHelp';
import JoinCompletion from '../../ServiceSignUp/JoinCompletion/JoinCompletion';
import SelectNumber from '../../ServiceSignUp/SelectNumber/SelectNumber';
import POBox015Mock from '../POBox015Mock';

const SignUp015Page = ({ authorityDataRefetch, storageUser, authorityDataState }: any) => {
  const initial015SignUpPage = {
    first: 'POBox015Mock',
    second: 'AmountHelp',
    third: 'SelectNumber',
  };
  const [pageState, setPageState] = useState<string>(initial015SignUpPage.first);

  const nextPage = () => {
    if (pageState === initial015SignUpPage.first) {
      setPageState(initial015SignUpPage.second);
    } else if (pageState === initial015SignUpPage.second) {
      setPageState(initial015SignUpPage.third);
    }
  };

  let signUpToRender;

  if (pageState === initial015SignUpPage.first) {
    signUpToRender = <POBox015Mock nextPage={nextPage} storageUser={storageUser} />;
  } else if (pageState === initial015SignUpPage.second) {
    signUpToRender = <AmountHelp nextPage={nextPage} authorityDataState={authorityDataState} />;
  } else if (pageState === initial015SignUpPage.third) {
    signUpToRender = (
      <SelectNumber authorityDataRefetch={authorityDataRefetch} authorityDataState={authorityDataState} />
    );
  }

  return signUpToRender ? signUpToRender : null;
};

export default SignUp015Page;
