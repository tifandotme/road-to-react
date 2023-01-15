import * as React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
    <h1>Hacker Stories</h1>
    
    <Search />
    
    <hr/>
    
    <ol>
      {list.map( function(item, index) {
        return (
          <li type={item.objectID}>
            <p>
              <a href={item.url}>{item.title}</a>
            </p>
            <p>{item.author}</p>
            <p>{item.num_comments}</p>
            <p>{item.points}</p>
          </li> 
        )
      } )}
    </ol>
    </div>
  );
}

function Search() {
  <><label htmlFor="search">Search = </label><input type="text" id="search" /></>
}

export default App;