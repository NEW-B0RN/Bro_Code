function List(){
    const fruits = [{id:1, name:"apple", calories:95},
                    {id: 2, name:"banana", calories:105},
                    {id : 3,name:"durian", calories:375},
                    {id : 4,name:"eggplant", calories:25},
                    {id: 5, name:"cherry", calories:50}];

// Sort fruits by name
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));

// Sort fruits by calories
    fruits.sort((a,b)=> a.calories-b.calories);

    const listItems = fruits.map(fruit => <li key={fruit.id} >{fruit.name} has <b>{fruit.calories}</b> calories</li>);
    return(<ul>{listItems}</ul>);
}

export default List