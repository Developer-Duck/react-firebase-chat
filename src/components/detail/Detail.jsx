import "./detail.css"

const Detail = () =>{
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>정찬혁</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoIteam">
                            <div className="photoDetail">
                            <img src="https://cdn.pixabay.com/photo/2024/05/14/05/38/gorilla-8760357_1280.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoIteam">
                            <div className="photoDetail">
                            <img src="https://cdn.pixabay.com/photo/2024/05/14/05/38/gorilla-8760357_1280.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoIteam">
                            <div className="photoDetail">
                            <img src="https://cdn.pixabay.com/photo/2024/05/14/05/38/gorilla-8760357_1280.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoIteam">
                            <div className="photoDetail">
                            <img src="https://cdn.pixabay.com/photo/2024/05/14/05/38/gorilla-8760357_1280.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block user</button>
                <button className="logout">Logout</button>
            </div>
        </div>  
    );
};

export default Detail;