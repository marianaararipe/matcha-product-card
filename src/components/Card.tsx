import styles from "./Card.module.css";
import matchaImg from "../assets/ice-matcha.png";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img className={styles.card_image} src={matchaImg} alt="Ice Matcha" />
        <p className={styles.card_price}>10$</p>
      </div>

      <div className={styles.card_badge}>
        <p className={styles.text_badge}>Free Delivery until 16/06/2026</p>
      </div>

      <div className={styles.card_info}>
        <div className={styles.line}>
          <div className={styles.card_title}>Ice Matcha</div>
          <button className={styles.card_btn}>Order Now 🡥</button>
        </div>

        <div className={styles.card_tags}>
          <span>Matcha</span>
          <span>Ice Cubes</span>
          <span>Honey</span>
          <span>Milk</span>
        </div>
      </div>
      
    </div>

    
  );
}

export default Card;
