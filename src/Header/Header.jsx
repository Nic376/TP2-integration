import React from "react"
import Logo from "../image/mstile-144x144.png"

class Header extends React.Component {
    render () {
        return (
            <>
                <div className="header mt-3 mb-5 p-3 ">
                    <h1 className="appchat" >SN_Appchat</h1>
                    <img src={ Logo } alt="SN_Appchat" className="logo" />
                </div>
            </>
        )
    }
}

export default Header