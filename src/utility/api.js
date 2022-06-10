import axios from "axios";

const fakeData = [
  {label: 'one', id: 1, nodeId: null,
  items: [
    {label: 'four', id: 4, nodeId: 1},
    {label: 'fife', id: 5, nodeId: 1},
  ]},
  {label: 'two', id: 2, nodeId: null},
  {label: 'three', id: 3, nodeId: null},
]

const mapData = (data, id) => {
  let newDataNum;
  let newData;
  let newItems;
  let newItemsNum;

  data.forEach((element, j) => {
    if (element?.id === id) {
      newDataNum = j
    }
    if (element?.items) {
      newItems = mapData(element.items, id)
      if (newItems !== element.items) {
        newItemsNum = j
      }
    }
    
  });
  if (newDataNum >= 0) {
    newData = [...data.slice(0, newDataNum), ...data.slice(newDataNum + 1)]
  }
  if (newItemsNum >= 0) {
    newData = [...data]
    newData[newItemsNum].items = [...newItems]
  }

  
  return newData ? newData : data
}


const api = {
  getItems: async () => {
    // Если бы бэк работал, то так было бы
    // return await axios.delete('https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62')
    // Чтобы создать новый объект, а не изменять старый
    return JSON.parse(JSON.stringify(fakeData))
    
  },
  deleteItem: async (data, id) => {
    // return await axios.delete('link', id)
    return await mapData(data, id)
  }
}

export default api;