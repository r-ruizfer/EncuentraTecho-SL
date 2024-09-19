function TeamInfo(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <a href={props.github}>
        <h4>GitHub</h4>
      </a>
      <a href={props.linkedin}>
        <h4>Linkedin</h4>
      </a>
    </div>
  )
}

export default TeamInfo
