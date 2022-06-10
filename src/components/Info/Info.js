import {useSelector} from "react-redux";

import './Info.css'
import {mainDataReducer} from "../../store/reducers/mainData";

const Info = () => {
  const selectUser = useSelector((state) => state.mainData.selectUser)
  return (
    <div className="info">
      {selectUser ? (
        <>
          <div>
            <span>label: </span>
            <span>{selectUser?.label}</span>
          </div>
          <div>
            <span>id: </span>
            <span>{selectUser?.id}</span>
          </div>
          <div>
            <span>nodeId: </span>
            <span>{selectUser?.nodeId ? selectUser?.nodeId : 'NaN'}</span>
          </div>
        </>
      ) : null}

    </div>
  )
}

export default Info;