// import todoForm
import { useRouter } from 'next/router'
import { useRef } from 'react'
// function NewTodo() {

// 	const router = useRouter()
// 	async function addTodoHandler(enteredTodoData) {
// 		const response = await fetch('/api/new-todo', {
// 			method: 'POST',
// 			body: JSON.stringify(enteredTodoData),
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		})

// 		const data = await response.json()
// 		console.log(data);

// 		router.push('/')
// 	}
// }

// function NewTodoForm(props) {
// 	const titleInputRef = useRef()
// 	const createdbyInputRef = useRef()
// 	const dateInputRef = useRef()

// 	function submitHandler(event) {
// 		event.preventDefault()

// 		const enteredTitle = titleInputRef.current.value;
// 		const enteredCreated = createdbyInputRef.current.value;
// 		const enteredDate = dateInputRef.current.value;

// 		const todoData = {
// 			title: enteredTitle,
// 			createdby: enteredCreated,
// 			date: enteredDate
// 		}

// 		props.onAddTodo(todoData)
// 	}
// }