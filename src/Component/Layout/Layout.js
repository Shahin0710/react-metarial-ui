import React from 'react'
import TopBar from '../TopBar'
import Footer from '../Footer'

const Layout = (props) => {
    return (
        <>
            <TopBar />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout










