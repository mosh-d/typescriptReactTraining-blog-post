import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/PFP 1.jpg";
import profile2 from "./images/PFP 3.jpg";
import profile3 from "./images/PFP 4 - Copy.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard
                header='Sope Kuti'
            >
                <SingleComment 
                    name='Sope' 
                    time='Today at 5:00pm' 
                    comment='It was great'
                    pfp={profile1} 
                />
            </UserCard>

            <UserCard
                header='Segun Egbon'
            >
                <SingleComment 
                    name='Segun' 
                    time='Today at 3:00am' 
                    comment='Meh!'
                    pfp={profile2} 
                />
            </UserCard>

            <UserCard
                header='Seun Fiko'
            >
                <SingleComment 
                    name='Seun' 
                    time='Yesterday at 6:00pm' 
                    comment='Fantastic'
                    pfp={profile3} 
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)