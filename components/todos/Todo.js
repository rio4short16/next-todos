import styles from "./Todo.module.css";

export default function Todo({ title, desc, createdby, date }) {
  return (
    <div className={styles.todoContainer}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.createdby}>{createdby}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
}
