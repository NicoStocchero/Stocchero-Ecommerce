function Button(props) {
  return (
    <button onClick={props.callback} style={{ backgroundColor: props.color }}>
      {props.label}
    </button>
  );
}

export default Button;
