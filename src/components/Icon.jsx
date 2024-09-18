function Icon(props) {
  return (
    <div>
      <a href="#">
          <img style={{width: "50px"}} className="logo" src={props.src} alt={props.alt} />
      </a>
    </div>
  )
}

export default Icon