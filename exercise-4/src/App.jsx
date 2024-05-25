import Place from "./components/Place.jsx";
import { AVAILABLE_PLACES } from "./data.js";


function App() {
  return (
    <>
      <header>
        <h1>PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {AVAILABLE_PLACES.map((images)=>(
              <Place id={images.id} src={images.image.src} alt={images.image.alt} title={images.title}/>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
