import TodoList from "../../components/todos/TodoList";
import axios from "axios";
export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/todos");
  console.log(res.data);
  return {
    props: {
      todos: res.data.tasks,
    },
    revalidate: 1,
  };
};

function Home({ todos }) {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}

export default Home;
