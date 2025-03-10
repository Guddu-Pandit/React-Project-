import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { useState } from "react";
  

const ContactForm = () => {
    const [name, setName] = useState("Guddu");
    const [email, setEmail] = useState("xyz@gmail.com");
    const [text, setText] = useState("hi there");


    const onSubmit = (event) => {
        event.preventDefault();
        
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
        <Button
            text="Via Support chat"
            icon={<MdMessage font-size="24px" />}
            />
            <Button
            text="Via call"
            icon={<MdCall font-size="24px" />}
            />
            </div>
            <Button
            isOutline={true}
            text="Via Email Form"
            icon={<MdMail font-size="24px" />}
            />


            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text"  name="name"/>
                </div>
                <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
                </div>
                <div className={styles.form_control}>
                <label htmlFor="name">Text</label>
                <textarea name="text" rows={8}/>
                </div>
                <div 
                style={{
                    display: "flex",
                    justifyContent: "end" 
                }}>
                <Button text="Submit Now "/>
                </div>
                <div>{name + " / " + email + " / " + text}</div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/Images/contact.svg" alt="" />
        </div>
    </section>
  )
};

export default ContactForm;