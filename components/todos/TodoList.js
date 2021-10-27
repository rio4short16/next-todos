import styles from "./TodoList.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  const router = useRouter();

  return (
    <div className={styles.ListContainer}>
      <Link href="/todo/create">
        <a className={styles.btncreate}>New Todo</a>
      </Link>
      {todos.map((todo) => (
        <Todo
          id={todo._id}
          key={todo._id}
          title={todo.title}
          desc={todo.desc}
          createdby={todo.createdby}
          date={todo.date}
        />
      ))}
    </div>
  );
}
