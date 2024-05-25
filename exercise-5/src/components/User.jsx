export default function user(props) {
    return (
      <li key={props.id} className="user-item">
          <img src={props.src} alt={props.alt} />
          <div className="text">
          <h2>{props.name}</h2>
          <p>{props.class}</p>
          <p>{props.interest}</p>
          </div>
      </li>
    );
  }
  