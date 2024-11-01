
import './App.css';

function App() {
  return (
    <div className='bg-slate-400'>
      <h1 className="text-center pt-10 font-bold text-5xl">Quiz App</h1>
      <div className="max-w-xl mx-auto p-6 mt-40 mb-40 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl text-center font-bold mb-4">Question 1</h2>
        <p>which is the largest city of Pakistan?</p>
       <div className='mb-2 mt-3'>
        <div><input type="radio" name="answer" className="mr-3"/>Karachi</div>
        <div><input type="radio" name="answer" className="mr-3"/>Dehli</div>
        <div><input type="radio" name="answer" className="mr-3"/>lahore</div>
        <div><input type="radio" name="answer" className="mr-3"/>Paris</div>
       </div>
       <button className="bg-green-500 text-white w-full p-3 rounded">
        Submit
      </button>
      </div>
    </div>
  );
}

export default App;









// import React from 'react'
// import { Button } from 'antd';

// const App = () => {
//   return (
//     <div>
//       <Button type="primary"> Submit</Button>
//     </div>
//   )
// }

// export default App
