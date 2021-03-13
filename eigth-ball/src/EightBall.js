import React, { useState } from 'react'
import "./EightBall.css"

// Take single property answers - array of objects - Each object ->
//  -> having a key for "msg" and "color"

// EightBall will need a state to keep track of current "color" and "msg text":
//  -> State should initially be "black" and "think of a question"

// The ball choose a random message when it is clicked on. 
// Should change the background color of the ball and the message


const EightBall = (props) => {
    // const initialMessage = "Think of a Question";
    // const initialColor = "black"

    const random = (arr) => {
        const randomIdx = Math.floor(Math.random() * arr.length)
        return arr[randomIdx]
    }
    const restart = () => {
        console.log('restarting')
        setMsg("Think of a Question")
        setColor("black")
        setRecords(0)
    }

    const [msg, setMsg] = useState("Think of a Question")
    const [color, setColor] = useState("black")
    const [record, setRecords] = useState(0)

    const clicker = () => {
        console.log('clicker')
        const {msg, color} = random(props.answers)
        setMsg(msg)
        setColor(color)
        setRecords(record + 1)
    }

    return (
        <>
            <div 
                className="EightBall"
                onClick={clicker}
                style={{ backgroundColor: color}}
            >
                <b>{msg}</b>
            </div>
            <h3>Record #{record}</h3>
            <button onClick={restart}>restart</button>    
        </>        
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}

export default EightBall