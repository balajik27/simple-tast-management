
import './App.css'
import { Assignment } from './assignment.jsx'
import { Comments } from './comments'
function App() {
  

  return (
    <div id='taskMgt' className='container mt-4'>
      <div className="row">
        <div className="col-md-4 col-0"></div>
        <div className="col-md-4 col-12">
          <div className="p-4 border rounded-5 shadow">
            <Assignment />
            <hr />
            <Comments />
          </div>
        </div>
        <div className="col-md-4 col-0"></div>
      </div>
    </div>
  )
}

export default App
