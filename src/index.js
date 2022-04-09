// import React from 'react';
// import ReactDOM from 'react-dom';
// import Api_Routes from './Api_Routes'

// const elemento = (
//     <div>
//         <Api_Routes/>
//     </div>
//   )
  
//   const container = document.getElementById('root')
  
//   ReactDOM.render(elemento, container)

import { createRoot } from 'react-dom/client';
import Api_Routes from './Api_Routes'   

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Api_Routes/>);
