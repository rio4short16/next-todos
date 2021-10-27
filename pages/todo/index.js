import TodoList from "../../components/todos/TodoList";
import { MongoClient } from "mongodb";
function Home({ todos }) {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}

export async function getStaticProps(context) {
  const uri =
    "mongodb+srv://sampleuser:7d4dbmzdBj2uXvO4@clustertest.yakxb.mongodb.net/test";
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const todosCollection = client.db("test").collection("todos");
  const todo = await todosCollection.find({}).toArray();
  client.close();

  return {
    props: {
      todos: JSON.parse(JSON.stringify(todo)),
    },
    revalidate: 1,
  };
}

export default Home;
