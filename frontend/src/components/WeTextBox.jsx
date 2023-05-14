import { Avatar } from '@mui/material'
import React from 'react'
import './CSS/WeTextBox.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

const WeTextBox = () => {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="quoraBox_quora">
        <h5>What is your question or link ?</h5>
      </div>
    </div>

  )
}

export default WeTextBox