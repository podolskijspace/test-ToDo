import List from "../List/List";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setUser} from "../../store/reducers/mainData";
import api from "../../utility/api";
import Info from "../Info/Info";

import './App.css';

function App() {
  const [list, setList] = useState([0, 2])
  const selectUser = useSelector((store) => store.mainData.selectUser)
  const dispatch = useDispatch()
  const fetchData = async () => {
    try {
      const result = await api.getItems()

      setList(result)
    } catch (e) {
      console.error(e)
    }
  }

  const onDelete = async () => {
    try {
      const result = await api.deleteItem(list, selectUser.id)

      setList(result)
      dispatch(setUser(null))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="app">
      <div className="app__left">
        <List list={list}/>
      </div>
      <div className="app__right">
        <Info/>
      </div>
      <div className="app__buttons">
        <button className="app__button" onClick={fetchData}>
          refresh
        </button>
        <button className="app__button" onClick={onDelete}>
          delete
        </button>
      </div>
    </div>
  );
}

export default App;
