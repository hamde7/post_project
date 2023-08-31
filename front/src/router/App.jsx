import { Outlet } from 'react-router-dom';
import PostList from '../components/postList'

function App() {

  return (
    <>
    <Outlet />
    <main >
      <PostList /> 
    </main>
    </>
  );
}


export default App;
export async function loader(){
    const respons = await fetch('http://localhost:8000/posts');
    const resdata = await respons.json();
    return resdata.posts;
}