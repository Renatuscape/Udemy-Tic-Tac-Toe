import { useState } from "react"

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function HandleEditClick() {
        setIsEditing(wasEditing => !wasEditing);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        btnCaption = 'Save';
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    return (<li>
        <span className="player">
            {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>{btnCaption}</button>
    </li>)
}