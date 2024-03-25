function List(props){

// Sort fruits by name
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));

// Sort fruits by calories
    //fruits.sort((a,b)=> a.calories-b.calories);
    const itemList = props.items;


    const listItems = itemList.map(item => <li key={item.id} >{item.name} has <b>{item.calories}</b> calories</li>);
    return(<ul>{listItems}</ul>);
}

export default List