import React from 'react'
import ReactDOM from 'react-dom'

function Author(props){
    return(
        <div className="author">
            <img src={props.identity.author.avatar} width = "100 px"
                 height="100 px"
                 alt="avatar" />
            <br/>
            {props.identity.author.name}

        </div>
    )

};

function Text(props){
    return (

        <div className="comment-text">
            {props.identity.text}
        </div>
    )

};

function  CurrentTime(props){

    return (

        <div className="date">
            {props.identity.date}

        </div>

    )
};


function App(props){
    return(
        <div>

            <Author identity = {props.identity} />
            <Text identity ={props.identity} />
            <CurrentTime identity = {props.identity} />
        </div>

    )
};

let identity = {
    author : {name : "Aylar" , avatar : "https://images.saymedia-content.com/.image/t_share/MTc1MTEyNTA4NzU0MTc1ODEy/the-most-annoying-female-anime-characters.jpg"},
    text : "My First Project",
    date : new Date().toLocaleDateString()
};


ReactDOM.render(
     <App identity = {identity}/>,
    document.getElementById("root")
);


