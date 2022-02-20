import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"
const Footer=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" className={styles.link} passHref>
                        <span className={styles.linkText}>WORK WITH US</span>
                        <Image src="/img/link.png" alt="" height="40px" width="40px" />
                    </Link>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                   P.0 BOX 735 Kilifi <br/> Kenya
                </div>
                <div className={styles.cardItem}>
                   lukaletyson99@gmail.com<br/> +254 792200650
                </div>
                
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                   P.0 BOX 735 Kilifi <br/> Kenya
                </div>
                <div className={styles.cardItem}>
                   lukaletyson99@gmail.com<br/> +254 792200650
                </div>
            </div>
        </div>
    );
}
export default Footer;