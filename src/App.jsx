// 시작
// npm i
// npm run dev
// npm i emoji-picker-react
// 파일 불러오기
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Login from "./components/login/Login";

const App = () => {

  const user = false;

  return (
    <div className='container'>
      {user ? (
        <>
        <List/>
        <Chat/>
        <Detail/>
      </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App