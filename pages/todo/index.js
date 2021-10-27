
import TodoList from '../../components/todos/TodoList'
const dummy_todos = [
	{
		id: 1,
		title: 'Playing Valorant',
		createdby: 'Naruto',
		date: 'Oct. 25, 2021'
	},
	{
		id: 2,
		title: 'Playing LoL',
		createdby: 'John',
		date: 'Oct. 26, 2021'
	},
	{
		id: 3,
		title: 'Playing CSGO',
		createdby: 'Sasuke',
		date: 'Oct. 27, 2021'
	}
]
function Home({ todos }) {
	return (
		<>
			<TodoList todos={todos} />
		</>
	)
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					id: 1
				}
			}
		]
	}
}

export async function getStaticProps() {
	return {
		props: {
			todos: dummy_todos
		},
		revalidate: 1
	}
}

export default Home
