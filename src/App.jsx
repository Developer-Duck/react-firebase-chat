// 시작
// npm i
// npm run dev
// npm i emoji-picker-react
// 파일 불러오기
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Chat from "./components/chat/Chat"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>

  )
}

export default App