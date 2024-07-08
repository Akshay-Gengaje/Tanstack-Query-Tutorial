import { useTodosId } from "../services/queries";

function Todo() {
  const todosIdQuery = useTodosId();
  //   if (todosIdQuery.isPending) return <span>loading....</span>;
  //   if (todosIdQuery.isError) return <span>Error Occured</span>;
  console.log(todosIdQuery.data);
  return (
    <div>
      <p>Query Function Status : {todosIdQuery.fetchStatus}</p>
      <p>Query Data Status : {todosIdQuery.status}</p>
      {todosIdQuery?.data?.map((todo) => (
        <div key={todo}>
          <span>{todo}</span>
        </div>
      ))}
    </div>
  );
}

export default Todo;
