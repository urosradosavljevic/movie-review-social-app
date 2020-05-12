import React, { useState, useRef, useEffect } from "react";
import useEditUserInfoMutation from "./useEditUserInfoMutation";
import { Form } from "../../../../shared-components/Form";
import { FormInput } from "../../../../shared-components/FormInput";

export const UserName = ({ userId, name, editFlag, setEditFlag }) => {
  const [editUser] = useEditUserInfoMutation();
  const [userName, setUserName] = useState(name);
  const inputElement = useRef(null);

  const setNameSubmit = (e) => {
    e.preventDefault();
    console.log("userName", userName);
    editUser({ variables: { userId, name: userName } });
  };

  useEffect(() => {
    editFlag && inputElement.current.focus();
  }, [editFlag]);

  return (
    <div>
      <Form style={{ display: !editFlag && "none" }} onSubmit={setNameSubmit}>
        <FormInput
          ref={inputElement}
          edit
          size={13}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form>
      <h2
        style={{ display: editFlag && "none" }}
        onDoubleClick={() => setEditFlag(!editFlag)}
      >
        {name}
      </h2>
    </div>
  );
};
