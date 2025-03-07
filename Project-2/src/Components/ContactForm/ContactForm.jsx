import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";



const ContactForm = () => {
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


            <form >
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
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/Images/contact_us.svg" alt="ContactImage" />
        </div>
    </section>
  )
};

export default ContactForm;