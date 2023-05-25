import HeaderContextContainer from '../../context/HeaderContextContainer'
import './index.css'

const ShelfItemContainer = props => {
  const {shelfItemDetails, isActive, updatedActiveShelf} = props
  const {label} = shelfItemDetails
  const shelfValue = shelfItemDetails.value

  const onClickShelfItem = () => {
    updatedActiveShelf(shelfValue)
  }

  const activeShelfClassName = isActive ? 'active-shelf' : ''

  return (
    <HeaderContextContainer.Consumer>
      {value => {
        const {isDarkTheme} = value

        const darkThemeText = isDarkTheme ? 'shelf-item-dark-theme-text' : ''

        return (
          <li className="shelf-item">
            <button
              type="button"
              className={`shelf-button ${activeShelfClassName} ${darkThemeText}`}
              onClick={onClickShelfItem}
            >
              {label}
            </button>
          </li>
        )
      }}
    </HeaderContextContainer.Consumer>
  )
}

export default ShelfItemContainer
