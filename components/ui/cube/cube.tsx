import styles from "./cube.module.css";

export default function Cube() {
  return (
    <div className={styles.scene}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`}></div>
        <div className={`${styles.face} ${styles.back}`}></div>
        <div className={`${styles.face} ${styles.right}`}></div>
        <div className={`${styles.face} ${styles.left}`}></div>
        <div className={`${styles.face} ${styles.top}`}></div>
        <div className={`${styles.face} ${styles.bottom}`}></div>
        <div className={`${styles.ring}`}></div>
      </div>
    </div>
  );
}
