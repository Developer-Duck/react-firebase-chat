import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"


const Chat = () => {

// 이모지 클릭 함수
const [open,setOpen] = useState(false);

const [text,setText] = useState("");

const endRef = useRef(null)

useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
})

const handleEmoji = e =>{
    setText(prev =>prev + e.emoji);
    setOpen(false)
}

console.log(text)

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>박유노</span>
                        <p>Lorem ipsum dolor, sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisic elit. Natus
                            quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                            magnam alias, odit quam
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                            <img src="https://cdn.pixabay.com/photo/2024/05/14/05/38/gorilla-8760357_1280.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisic elit. Natus
                            quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                            magnam alias, odit quam
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisic elit. Natus
                            quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                            magnam alias, odit quam
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisic elit. Natus
                            quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                            magnam alias, odit quam
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisic elit. Natus
                            quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                            magnam alias, odit quam
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                    <input type="text" placeholder="Type a message..." value={text} onChange={e=>setText(e.target.value)} />
                    <div className="emoji">
                    
                        <img src="./emoji.png" alt="" onClick={() => setOpen((prev)     =>!prev)} /> 

                        <div className="picker">
                            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                        </div>
                    </div>
                    <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat