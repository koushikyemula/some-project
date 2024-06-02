import React, { useState } from "react";

type InitialValuesProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const initialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => {},
};

const authContent = React.createContext(initialValues);

const { Provider } = authContent;

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(initialValues.currentStep);

  const values = {
    currentStep,
    setCurrentStep,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useAuthContextHook = () => {
  const state = React.useContext(authContent);

  return state;
};
