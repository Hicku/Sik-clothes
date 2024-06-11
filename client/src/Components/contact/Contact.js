import "./contact.css";
import { MdComputer } from "react-icons/md";
import { LiaSmsSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

function contact() {
  return (
    <div className="contact-options-container">
      <div className="contact-options">
        <section>
          <div>
            <LiaSmsSolid className="options-icon" />
            <label>Text</label>
          </div>
          <input type="checkbox" />
        </section>
        <section>
          <div>
            <MdComputer className="options-icon" />
            <label>Email</label>
          </div>
          <input type="checkbox" />
        </section>
        <section>
          <div>
            <MdOutlineEmail className="options-icon" />
            <label>Mail</label>
          </div>
          <input type="checkbox" />
        </section>
      </div>
    </div>
  );
}

export default contact;
