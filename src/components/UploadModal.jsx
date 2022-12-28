import React from "react";
import { IoClose } from "react-icons/io5";
import { Icons } from "../Icons&Images";

import "../scss/uploadmodal.scss";

const UploadModal = ({setshowFileUploadModal}) => {
  return (
    <div className="upload-modal app__flex">
      <div className="modal-class">
        <div className="modal-close app__flex-5">
          <IoClose onClick={() => setshowFileUploadModal(false)} />
        </div>
        <div className="modal-upload column-flex">
          <div className="img-size">
            <img src={Icons.upload} alt="upload" />
          </div>
          <article className="column-flex">
            <input type="file" name="upload" id="upload" />
            <label className="app__flex" htmlFor="upload">Add File</label>
            <span>or drop files to upload</span>
          </article>
        </div>
        <article className="app__flex-5">
          <button>Submit</button>
        </article>
      </div>
    </div>
  );
};

export default UploadModal;
