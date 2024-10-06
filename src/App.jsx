import { RecoilRoot } from "recoil"
import AddPost from "./components/AddPost"
import PostList from "./components/PostList"


function App() {

  return (
    <>
      <RecoilRoot>
        <div>
          <h1 style={{ textAlign: "center" }}>React recoil</h1>
          <AddPost />
          <PostList />
        </div>
      </RecoilRoot>
    </>
  )
}

export default App
