
import styles from './TodoList.module.css'
import Todo from './Todo'

export default function TodoList({ todos }) {
	return (
		<div className={styles.ListContainer}>
			{
				todos.map(todo => (
					<Todo
						id={todo.id}
						key={todo.id}
						title={todo.title}
						createdby={todo.createdby}
						date={todo.date}
					/>
				))
			}
		</div>
	)
}