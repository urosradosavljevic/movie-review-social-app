import React, { useState, useRef, useEffect } from "react";
import useEditUserInfoMutation from "./useEditUserInfoMutation";
import { FormWrapper } from "../../../../shared-components/Form/FormWrapper";
import { FormInput } from "../../../../shared-components/Form/FormInput";

export const UserName = ({ userId, name, editFlag, setEditFlag }) => {
  const [editUser] = useEditUserInfoMutation();
  const [userName, setUserName] = useState(name);
  const inputElement = useRef(null);

  const setNameSubmit = (e) => {
    e.preventDefault();
    editUser({ variables: { userId, name: userName } });
  };

  useEffect(() => {
    editFlag && inputElement.current.focus();
  }, [editFlag]);

  return (
    <div>
      <FormWrapper style={{ display: !editFlag && "none" }}>
        <form onSubmit={setNameSubmit}>
          <FormInput
            ref={inputElement}
            edit
            size={13}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </form>
      </FormWrapper>
      <h2
        style={{ display: editFlag && "none" }}
        onDoubleClick={() => setEditFlag(!editFlag)}
      >
        {name}
      </h2>
    </div>
  );
};
