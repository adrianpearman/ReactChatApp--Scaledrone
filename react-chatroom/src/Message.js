import React from 'react'

renderMessage(message){
    const {member, text} = message
    const {currentMember} = this.props
    const messageFromMe = member.id === currentMember.id
    const className = messageFromMe ? "Messages-message currentMember" : "Messages-message"

    return(
        <li className={className}>
            <span className='avatar' style={{backgroundColor: member.clientData.color}}/>
            <div>
                <div className='username'>
                    {member.clientData.username}
                </div>
                <div classNAme='text'>{text}</div>
            </div>
        </li>
    )
 }

class Messages extends React.Component{
    render(){
        const {messages} = this.props
        return(
            <ul className='Messages-List'>
            {messages.map((m) => {
                return this.renderMessage(m)
            })}
            </ul>
        )
    }
}

export default Messages