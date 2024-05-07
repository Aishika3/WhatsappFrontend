import React from "react";
import { ConversationFlowForm, SignUpReq, Banner } from "components";
import { Cookies } from "react-cookie";

export const Form = () => {
  const cookies = new Cookies();
  const token = cookies.get("userid");

  return (
    <div>
      {<Banner />}
      <br />
      <br />
      {token ? <ConversationFlowForm userId={token}/> : <SignUpReq />}
    </div>
  );
};

export default Form;
