import axios from "axios";

export default function App() {
  async function getTodos() {
    const response = await axios.get("/todos");
    console.log(response);
  }

  return (
    <>
      <button onClick={getTodos}>get todos</button>
    </>
  );
}
