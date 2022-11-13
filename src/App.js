// import React from 'react'

// function App(){
//   return <> Hello </>
// }

// const App = () => {
//   return React.createElement("h1",{}, "Hello World");
// };


const App = () => {
  return (
    <>
      <MyName />
      <h1 className="h1">Hello World</h1>
      <p>Awesome {1+1}</p>
      <MyName />
  </>
  );
}

const MyName = () => {
  return <h3>Faisal Ahmed</h3>;
}


export default App