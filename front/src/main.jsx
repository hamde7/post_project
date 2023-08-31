import React from 'react'
import ReactDOM from 'react-dom/client'
import App ,{loader as lodInformation} from './router/App'
import './index.css'
import NewPost ,{action as actionOfSubmit} from './router/NewPost'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import RootLayout from './router/RootLayout'
import PostDetails , {loader as PostDetailsLoader} from './router/PostDetiles'


const router = createBrowserRouter([
  {path : '/' , element : <RootLayout />  , children : [
    {path : '/' , element : <App /> , loader :lodInformation , children :[
      {path : '/new-Post'  ,element  : <NewPost /> , action : actionOfSubmit},
      {path : '/:postId'  ,element  : <PostDetails /> ,loader : PostDetailsLoader }
    ]}
  ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)