import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const lowerConvert = event.target.value.toLowerCase()
    this.setState({
      searchInput: lowerConvert,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const resultList = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main-container">
        <h1 className="main-heading">Destination search</h1>
        <div className="icon-block">
          <input
            type="search"
            className="input-style"
            placeholder="Search here"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon-style"
          />
        </div>
        <ul className="card-container">
          {resultList.map(eachUser => (
            <DestinationItem userDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
