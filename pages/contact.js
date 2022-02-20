import styles from '../styles/Contact.module.css'
import Circle from "../components/Circle"
const Contact=()=>{
    return(
        <div className={styles.container}>
            <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
            <Circle backgroundColor="yellow" right="-30vh" bottom='-60vh' />
            <h1 className={styles.title}>GET IN TOUCH</h1>
            <form className={styles.form} >
                <input className={styles.inputS} type="text" placeholder='Username' />
                <input className={styles.inputS} type="text" placeholder='Phone' />
                <input className={styles.inputL} type="email" placeholder='Email' />
                <input className={styles.inputL} type="text" placeholder='Subject' />
                <textarea cols="30" rows="10" className={styles.textarea} placeholder='Message' ></textarea>
                <button className={styles.button} >SUBMIT</button>
            </form>
        </div>
    );
}
export default Contact;