import React from 'react';
import { HiX } from "react-icons/hi";
import { ImAttachment } from "react-icons/im";

import '../scss/assignmentModal.scss';

const AssignmentModal = ({setToggleAssignment, toggleAssignment}) => {
  return (
    <section className="assignment-modal">
    <article>
      <div className="app__flex-2">
        <h3>Submit Assignment</h3>
        <HiX onClick={() => setToggleAssignment(!toggleAssignment)} />
      </div>
      <h5>Fundamentals of Design</h5>
      <h6>Description</h6>
      <div className="description-input">
        <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>

      <h6 className="attachment">Attachments</h6>
      <article className="app__flex-3">
        <div>
          <input
            type="file"
            name="file"
            id="file"
            className="file-upload"
            onChange=""
          />
          <label className="app__flex" htmlFor="file">
            <ImAttachment />
            Browse files or drag and drop here
          </label>
        </div>
        <button>Add</button>
      </article>
    </article>

    <div className="modal-btns app__flex">
      <button className="submit">submit</button>
      <button
        onClick={() => setToggleAssignment(!toggleAssignment)}
        className="cancel"
      >
        Cancel
      </button>
    </div>
  </section>
  )
}

export default AssignmentModal;