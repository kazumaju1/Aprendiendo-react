export const Square = ({children, isSelcted, updateBoard, index}) => {
    const className = `square ${isSelcted ? 'is-selected' : ''}`
    const handleClick = () => {
      updateBoard(index)
    }
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }