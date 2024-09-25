function Icon(props) {
  return (
    <div>
      <a href="#">
          <img style={{width: "50px", margin: "10px"}} className="logo" src={props.src} alt={props.alt} />
      </a>
    </div>
  )
}

export default Icon