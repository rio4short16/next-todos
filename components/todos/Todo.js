import styles from "./Todo.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function Todo({ _id, title, desc, createdby, date }) {
  const router = useRouter();
  const handleDelete = async (e, id) => {
    e.preventDefault();
    await axios.get(`/api/deletetodo?id=${id}`);
    router.replace(router.asPath);
  };
  return (
    <div className={styles.todoContainer}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        <span
          className={styles.deletebtn}
          onClick={(e) => {
            handleDelete(e, _id);
          }}
        >
          &times;
        </span>
      </div>

      <p className={styles.desc}>{desc}</p>
      <p className={styles.createdby}>{createdby}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
}
