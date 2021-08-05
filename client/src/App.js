import './App.css'
import PostList from './PostList'
import Addpost from './Addpost'
import Editpost from './Editpost'
import { BrowserRouter, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className='App'>
      <h1 className='hello'>Blog Post</h1>
      <BrowserRouter>
        <Route path='/' component={PostList} exact />
        <Route path='/addpost' component={Addpost} exact />
        <Route path='/editpost/:postid' component={Editpost} exact />
      </BrowserRouter>
    </div>
  )
}

export default App
