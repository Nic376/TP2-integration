import React from "react"

class CartesChats extends React.Component {
    state = {
        chats: []
    }

    ajoutDeChat(chat) {
        this.setState({ chats: [...this.state.chats, chat] })
    }
    render () {
        return (
            <>
                <h1>Titre chat</h1>
                <div>Une carte de chat ici</div>
            </>
        )
    }
}

export default CartesChats