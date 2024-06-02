import { doc, setDoc,getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { create } from 'zustand'
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceivertBlocked: false,
    
    ChangeChat: (chatId, user) => {
        const currentUser = useUserStore.getState().currentUser
        
        // CHECK IF CURRENT USER IS BLOCKED
        if(user.blocked.includes(currentUser.id)){
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked:true,
                isReceivertBlocked:false,
            });
        }

        // CHECK IF RECEIVER USER IS BLOCKED

        else if(currentUser.blocked.includes(user.id)){
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked:false,
                isReceivertBlocked:true,
            });
        } else{
            return set({
                chatId,
                user,
                isCurrentUserBlocked: false,
                isReceivertBlocked:false,
            });
        }
    },
        changeBlock: () =>{
            set(state=>({...state, isReceivertBlocked: !state.isReceivertBlocked}))
        }

}));