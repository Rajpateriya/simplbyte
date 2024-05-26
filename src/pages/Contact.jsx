import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "./Button";
import "./Contact.css";
import bg from "../components/assets/images/image2.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactHeader from "./ContactHeader";

export const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(form.name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  
    emailjs
      .send(
        "service_l2esei5",
        "template_x9fkxb4",
        {
          from_name: form.name,
          to_name: "Team Simplbyte",
          from_email: form.email,
          to_email: "team.simplbyte@gmail.com",
          message: form.message,
        },
        "M3hfAJzpeeEbM_f1i"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <ContactHeader />
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
          <form ref={formRef} onSubmit={onSubmit} className="form">
            <div className="form_control">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Jhon Peter" onChange={handleChange} />
            </div>

            <div className="form_control">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="abc@example.com" onChange={handleChange} />
            </div>

            <div className="form_control">
              <label htmlFor="email">Text</label>
              <textarea
                className="border-2px"
                type="text"
                name="message"
                placeholder="Discription"
                onChange={handleChange}
              />
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
