// 시작
// npm i
// npm run dev
// npm i emoji-picker-react
// npm i react-toastify
// npm i firebase

// 파이어베이스 공식 문서 참고
// https://firebase.google.com/docs/storage/web/upload-files?hl=ko
// https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko
// npm i zustand

// zustand 공식 문서
// https://docs.pmnd.rs/zustand/getting-started/introduction

// 파일 불러오기
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Notification from "./components/notificatoin/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth} from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const { chatId } = useChatStore();

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user?.uid);
    })

    return ()=>{
      unSub();
    };

  },[fetchUserInfo]);

  console.log(currentUser)

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {currentUser ? (
        <>
        <List/>
        {chatId && <Chat/>}
        {chatId && <Detail/>}
      </>
      ) : (
        <Login/>
      )}
      <Notification/>
    </div>
  );
};

export default App