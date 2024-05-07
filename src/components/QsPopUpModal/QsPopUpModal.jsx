import React, { useState } from "react";
import "./styles.css";
import Cancel from "@iconscout/react-unicons/icons/uil-cancel";
import { useThemeContext } from "providers";
export const QsPopUpModal = (props) => {
  const {theme}=useThemeContext();
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(""); // Add a new state variable for the URL

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (e) => {
    if (
      message !== null &&
      (option !== null || props.parentId === props.uniqueRootId)
    ) {
      console.log(url);
      props.handleAddNode(props.parentId, message, option, file, url); // Pass the URL to the handleAddNode function
      props.handleQuestionForm();
    }
  };

  return (
      <div class="absolute top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto">
        <div className="popup">
          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              position: "fixed",
              top: 0,
              right: 0,
            }}
          >
            <Cancel
              color="#7d796f"
              size="2rem"
              onClick={props.handleQuestionForm}
              className="cancel"
            />
          </div>
          {props.parentId !== props.uniqueRootId ? (
            <>
              <label className="label">
                Enter the option for the next message:
              </label>
              <input
                type="text"
                name={message}
                onChange={handleOption}
                className="input"
              />
            </>
          ) : null}
          <br />
          <label className="label">
            Enter the next message for this option:
          </label>
          <input
            type="email"
            name={option}
            onChange={handleMessage}
            className="input"
          />
          <br />
          {/* <label className='label'>Select Media for the message (Keep it empty if there is no media for that particular message):</label>
                    <input type="file" onChange={handleFile} className='file-input'/>
                    <br/> */}
          <label className="label">Enter URL (if applicable):</label>
          <input type="text" onChange={handleUrl} className="input" />
          <br />
          <button onClick={handleSubmit} class="submit-btn">
            Submit
          </button>
        </div>
      </div>
  );
};

export default QsPopUpModal;
