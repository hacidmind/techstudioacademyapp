import React from "react";
import { ImAttachment } from "react-icons/im";

import './fileupload.scss';

const Fileupload = () => {
  return (
    <article className="file-upload app__flex-3">
      <div>
        <input
          type="file"
          name="file"
          id="file"
          className="file-upload-input"
          onChange=""
        />
        <label className="app__flex" htmlFor="file">
          <ImAttachment />
          Browse files or drag and drop here
        </label>
      </div>
      <button>Add</button>
    </article>
  );
};

export default Fileupload;
