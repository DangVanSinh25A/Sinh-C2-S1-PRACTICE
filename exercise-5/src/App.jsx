import User from "./components/User.jsx";
import { AVAILABLE_User } from "./data.js";


function App() {
  return (
    <>
      <main>
        <section className="user-category">
          <ul className="user">
            {AVAILABLE_User.map((user)=>(
              <User id={user.id} src={user.image.src} alt={user.image.alt} name={user.name} class = {user.class} interest={user.interest}/>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
