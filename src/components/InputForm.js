import React from "react";
import Input from "./UI/Input";

const InputForm = (props) => {
  return (
    <form className="inputForm">
      <div>
        <label htmlFor="X-axis">X axis lables:</label>
        <Input
          type="text"
          id="X-axis"
          onChangeField={props.onChangeLables}
          onBlur={props.onChangeLables}
        ></Input>
      </div>
      <div>
        <label className="pt-2" htmlFor="Y-axis">Y axis lables:</label>
        <Input
          type="text"
          id="Y-axis"
          onChangeField={props.onChangeData}
          onBlur={props.onChangeData}

        ></Input>
      </div>
    </form>
  );
};

export default InputForm;
