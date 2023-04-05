import React from "react";

const ModifyDescription = ({ description }) => {
    const elements = description?.split(/(https?:\/\/[^\s]+)/g);

    const renderedElements = elements?.map((element, index) => {
      if (element?.match(/https?:\/\/[^\s]+/)) {
        return (
          <pre>
            <a
              key={index}
              href={element}
              target="_blank"
              rel="noopener noreferrer"
            >
              {element}
            </a>
          </pre>
        );
      } else {
        return (
          <pre  styles={{
            maxWidth: "100%",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            boxSizing:"border-box"
          }}>
            {element && (
              <p 
              styles={{
                boxSizing:"border-box",
                maxWidth: "100%",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
                key={index}
              >
                {element}
              </p>
            )}
          </pre>
        );
      }
    });
  
    return <div style={{ boxSizing: "border-box",fontFamily:"sans-serif" }}>{renderedElements}</div>;
};

export default ModifyDescription;
