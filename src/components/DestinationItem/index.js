import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  console.log(userDetails)

  return (
    <li className="list-style">
      <img src={imgUrl} alt={name} className="img-style" />
      <p className="name-style">{name}</p>
    </li>
  )
}

export default DestinationItem
