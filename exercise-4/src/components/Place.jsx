export default function Place(props) {
  return (
    <li key={props.id} className="place-item">
      <button>
        <img src={props.src} alt={props.alt} />
        <h3>{props.title}</h3>
      </button>
    </li>
  );
}
