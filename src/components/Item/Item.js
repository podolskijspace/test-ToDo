import List from "../List/List";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/reducers/mainData";

import './Item.css'

const Item = ({item}) => {
  const dispatch = useDispatch()
  const onItem = () => {
    dispatch(setUser(item))
  }

  return (
    <li className="item">
      <div className="item__wrapper" onClick={onItem}>
        {item.label}
      </div>
      {item.items ? <List list={item.items} /> : null }
    </li>
  )
}

export default Item;