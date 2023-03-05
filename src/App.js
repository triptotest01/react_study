// useRef() 와 useEffect() 예제 
import React, {useEffect, useRef} from "react";
import './App.css';

function App(){
  const inputRef = useRef()

  useEffect(()=>{
    console.log(inputRef);
    inputRef.current.focus();
   }, []
  )

  const loginAlert= () =>{
    alert('Welcome! ${inputRef.current.value}');
    inputRef.current.focus();
  }

  return(
   <div className="App"> 
     <header className="App-header">
        <input   ref={inputRef} type="text" placeholder="id"/>
        <input  type="text" placeholder="password"/>
        <button onClick={loginAlert}>Login</button>
     </header>
   </div>
  )

}

export default App;





// useEffect 예제2. 

// import React from "react";
// import Number from "./Number";

// function App(){

//   return(
//     <Number/>
//   )

// }

// export default App;



// useEffect 예제1. 

// import React from "react";
// import UseEffect from "./UseEffect";

// function App(){

//   return(
//     <UseEffect/>
//   )
// }

// export default App;


// useMemo(), useCallback(), React.memo() 예제 
// import React,{useState, useRef, useMemo, useCallback} from "react";
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';

// function App(){

//   function countActiveUsers(users){
//     console.log("빨간색의 활성상태 유저명수 계산중...")
//     return users.filter(user=> user.active).length;
//   }

//   const [inputs, setInputs] = useState({username: "", email:""})
//   const{username, email} = inputs;
 
//   const handleInputChange = useCallback( e => {
//           // e.target은 onChange이벤트가 설정된 input태그를 가리킴
//           const {name, value} = e.target; 
//           setInputs({
//             ...inputs,
//             [name]: value 
//           })
//          }, [inputs]
//   )

//   const [users, setUsers] = useState([
//     { 
//       id: 1,
//       username: 'user1',
//       email: 'user1@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'user2',
//       email: 'user2@gmail.com',
//       active: false

//     },
//     {
//       id: 3,
//       username: 'user3',
//       email: 'user3@gmail.com',
//       active: false
//     }
//   ]); 

//   const nextId =useRef(4)

  // useCallback 을 쓰는 이유  (= 함수 재사용과 관련 !! )
  // : useCallback 을 사용하지 않으면 컴포넌트가 리렌더링 될때마다, 함수들이 새로만들어짐. 
  //  그러나 useCallback 을 사용하게 되면 한번 만든 함수를 필요할때만 새로만들고 (재사용이 가능해진다!) - 최적화

//   const handleCreateClick = useCallback(
//       ()=>{
//           const user = {
//             id: nextId.current,
//             username,
//             email
//           }

         
//         // setUsers([...users, user])  
//         setUsers(users => users.concat(user))

//         setInputs({
//             username: "",
//             email: ""
//         })  
      
//         nextId.current +=1;
//     } , [ username, email]
//   )

//   const handleDeleteClick = useCallback( id => {
//               setUsers(users.filter(user => user.id!==id));
//             }, [users]

//  )
 
//  const handleToggleClick = useCallback( (id) => { 
//             setUsers(users.map( user => user.id===id?{...user, active: !user.active}:user)) 
//              } , [users]
//  )
//  const count = useMemo(()=>countActiveUsers(users),[users]);

//  return(
//   <>
//     <ArrayAdd
//       username={username}
//       email={email}
//       onInputChange={handleInputChange}
//       onCreateClick={handleCreateClick}
//     />

//     <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>
//     <div> 활성사용자 수 : {count} </div>
//   </> 
//  )
// }

// export default App;






// import './App.css';
// import React from "react";
// import UserList1 from './UserList1';
 
//  function App(){
  // const users = [
  //   { 
  //     id: 1,
  //     username: 'user1',
  //     email: 'user1@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     username: 'user2',
  //     email: 'user2@gmail.com'

  //   },
  //   {
  //     id: 3,
  //     username: 'user3',
  //     email: 'user3@gmail.com'
  //   }
  // ] 

//    return(
//     <UserList1 users={users}/>
//    );
//  }

//   export default App;

  

// ArrayRender1


// import './App.css';
// import React from "react";
// import ArrayRender1 from './ArrayRender1';
 
//  function App(){
//    return(
//     <ArrayRender1/>
//    );
//  }

//   export default App;


// 5. InputState 
// import './App.css';
// import React from "react";
// import InputState from './InputState';
 
//  function App(){
//    return(
//     <InputState/>
//    );
//  }

//   export default App;





// 04 - useState - 버튼 동적구현 
// function App(){
//   return (<Counter/> )
// }

// export default App;



// 03 - props : 두 컴포넌트 사이에 데이터 전송 테스트

// function App(){
//   return (<Hello name='react' color='red'/> )
// }

// export default App;




// 02 - 컴포넌트 export, import 연습
 
// function App(){
//   return <MyComponent/>;
// }

// export default App;



// 01 - JSX 테스트 
// function App() {

//   const text = 'JSX & React project!'  

//   return (
//     <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       {text}
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
//   );
// }


// export default App;
