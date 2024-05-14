import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "./Button";
import "./Contact.css";
import bg from "../components/assets/images/image2.png";
import { useState } from "react";
import ContactHeader from "./ContactHeader";

export const Contact = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [text, setText] = useState(undefined);

  const onSubmit = (event) => {
    if (event) {
      event.preventDefault(); //for preventing page default refresh
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
    }
  };

  return (
    <>
    <ContactHeader/>
      <section className="form_section md:flex-col">
        <div>
          <div className="contact_form">
            <div className="top_btn">
              <Button
                text="VIA SUPPORT CHAT"
                icon={<MdMessage fontSize="20px" />}
              />
              <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="20px" />} />
            </div>
            <Button
              isOutline="true"
              text="VIA EMAIL FROM"
              icon={<HiMail fontSize="20px" />}
            />
          </div>
          <form onSubmit={onSubmit} className="form">
            <div className="form_control">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Jhon Peter" />
            </div>

            <div className="form_control">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="abc@example.com" />
            </div>

            <div className="form_control">
              <label htmlFor="text">Text</label>
              <textarea className="border-2px" type="text" name="text" placeholder="Discription" />
            </div>
            <div className="submit">
              <Button text="SUBMIT" />
            </div>
            {/* <p>
              {`Name: ${name}`} <br/> {`Email: ${email}`} <br/> {`Text: ${text}`}
            </p> */}
          </form>
        </div>
        <div className="contact_image">
          <img src={bg} alt="image" />
        </div>
      </section>
    </>
  );
};

// export default Contact;
