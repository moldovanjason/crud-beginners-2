import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label htmlFor="">Movie Name:</label>
        <input type="text" name="movieName" placeholder="" />
        <label >Movie Review:</label>
        <input name="review" placeholder="" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
