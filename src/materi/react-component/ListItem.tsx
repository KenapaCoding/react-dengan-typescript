import { Item } from "../../types/Item";
import Items from "./Items";

const items:Item[] = [
    {id:1,name:'Apple'},
    {id:2,name:'Banana'},
    {id:3,name:'Orange'}
]

const ListItem = () => {
  return <div>
    <h1>List of fruits</h1>
    <ul>
       {
        items.map(item => <Items key={item.id} item={item}/>)
       } 
    </ul>
  </div>;
};

export default ListItem;
