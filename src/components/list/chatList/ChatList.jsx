import { useState , useEffect} from "react"
import AddUser from "./addUser/addUser"
import "./chatList.css"
import "../../chat/Chat"
import { useUserStore } from "../../../lib/userStore";
import { doc, onSnapshot, getDoc, updateDoc} from "firebase/firestore"; 
import {db} from "../../../lib/firebase"
import { useChatStore } from "../../../lib/chatStore";

const ChatList = () =>{
    
    const [chats, setChats] = useState([]);
    const [addMod,setAddMode] = useState(false);

    const {currentUser} = useUserStore();
    const {chatId, ChangeChat} = useChatStore();

    useEffect(()=>{
        const unsub = onSnapshot(
            doc(db, "userchats", currentUser.id), 
            async (res) => {
            const items = res.data().chats;

            const promises = items.map( async (item) => {
                const userDocRef = doc(db, "users",item.receiverId);
                const userDocSnap = await getDoc(userDocRef)

                const user = userDocSnap.data()

                return{...item, user};
            });

            const chatData = await Promise.all(promises)

            setChats(chatData.sort((a,b) => b.updateAt - a.updatedAt));

        });

        return () =>{
            unsub()
        }
    },[currentUser.id]);

    const handleSelect = async (chat) =>{

        const userChats = chats.map(item=>{
            const {user, ...rest} = item;

            return rest;
        });

        const chatIndex = userChats.findIndex(item=>item.chatId === chat.chatId)

        userChats[chatIndex].isSeen = true;

        const userChatsRef = doc(db, "userchats", currentUser.id);

        try{
            await updateDoc(userChatsRef,{
                chats: userChats,
            });
            ChangeChat(chat.chatId, chat.user)
        }catch(err){
            console.log(err)
        }

        ChangeChat(chat.chatId,chat.user)
    }

    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img className="add" src={addMod ? "./minus.png" : "./plus.png"} alt="" onClick={() =>setAddMode((prev) =>!prev)}/>
            </div>
            {chats.map((chat) =>(
                <div className="item" key={chat.chatId} onClick={() =>handleSelect(chat)}>
                <img src={chat.user.avatar || "./avatar.png"} alt="" />
                <div className="texts">
                    <span>{chat.user.username}</span>
                    <p>{chat.lastMessage}</p>
                </div>
            </div>
            ))}
            
            {addMod && <AddUser/>}
        </div>
    );
};

export default ChatList