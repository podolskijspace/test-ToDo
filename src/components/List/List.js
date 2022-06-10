import Item from "../Item/Item";

import './List.css'

const List = ({list}) => {
  return (
    <ul className="list">
      {list.map(item => (
          <Item key={item.id} item={item}/>
        )
      )}
    </ul>
  )
}

export default List;