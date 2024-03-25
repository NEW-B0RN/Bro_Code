import List from "./List.jsx"

function App() {

  const fruits = [{id:1, name:"apple", calories:95},
                  {id: 2, name:"banana", calories:105},
                  {id : 3,name:"durian", calories:375},
                  {id : 4,name:"eggplant", calories:25},
                  {id: 5, name:"cherry", calories:50}];
    return (
         <List items={fruits} category="Fruits"/>
    );
}

export default App
