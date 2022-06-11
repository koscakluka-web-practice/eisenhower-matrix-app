import "./assets/theme/base.scss";

function App() {
  return (
    <div id="container">
      <header>Eisenhower Matrix App</header>
      <main>
        <section id="matrix">
          <div id="urgent-header" className="matrix-header">
            Urgent
          </div>

          <div id="not-urgent-header" className="matrix-header">
            Not Urgent
          </div>
          <div id="important-header" className="matrix-header-column">
            Important
          </div>
          <section id="do-quadrant" className="panel">
            <h1>Do</h1>
            <ul className="task-list">
              {["Task 1", "Task 2"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>
          <section id="schedule-quadrant" className="panel">
            <h1>Schedule</h1>
            <ul className="task-list">
              {["Task 1", "Task 2"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>

          <div id="not-important-header" className="matrix-header-column">
            Not Important
          </div>
          <section id="delegate-quadrant" className="panel">
            <h1>Delegate</h1>
            <ul className="task-list">
              {["Task 1", "Task 2"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>
          <section id="delete-quadrant" className="panel">
            <h1>Delete</h1>
            <ul className="task-list">
              {["Task 1", "Task 2"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>
        </section>
        <section id="tasklist" className="panel">
          <h1>Tasklist:</h1>
          <ul className="task-list">
            {["Task 1", "Task 2"].map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

//TODO: Attribute: <a href="https://www.freepik.com/vectors/random-pattern">Random pattern vector created by vector_corp - www.freepik.com</a>

export default App;
