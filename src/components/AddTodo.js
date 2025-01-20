function AddTodo({ submitHandel, onChange, state }) {
  console.log("ADDtodo rendered");

  return (
    <form onSubmit={submitHandel}>
      <input type="text" value={state.todo} onChange={onChange} />
      <button className="btn btn-dark" disabled={!state.todo} type="submit">
        Ekle
      </button>
    </form>
  );
}

export default AddTodo;
