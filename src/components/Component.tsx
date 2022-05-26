import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import useActions from "../hooks/useActions";

const Component: FC = (): any => {
  const { login, reset } = useActions();
  const stateNumber = useSelector(({ someReducer }: any) => someReducer);

  const onClickHandler = (evt: any) => {
    login({ email: "some@mail.com", password: "12345" });
  };
  const onClickReset = (evt: any) => {
    reset();
  };

  return (
    <Fragment>
      <div style={{ color: "red", fontSize: "24px" }}>
        <code>{JSON.stringify(stateNumber)}</code>
      </div>
      <button onClick={onClickHandler}>BUTTON</button>
      <button onClick={onClickReset}>RESET</button>
    </Fragment>
  );
};

export default Component;
