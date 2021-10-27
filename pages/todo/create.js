// import todoForm
import { useRouter } from "next/router";
import FormComponent from "../../components/todos/NewTodoForm";
import axios from "axios";

function NewTodoForm(props) {
  const router = useRouter();
  async function addTodoHandler(enteredTodoData) {
    const res = await axios.post("/api/new-todo", enteredTodoData);
    if (res.data.result) router.push("/todo/");
  }

  return <FormComponent title="Create New Todo" onAddTodo={addTodoHandler} />;
}

export default NewTodoForm;
