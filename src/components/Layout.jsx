const Layout = (props) => {

    const { children } = props;

    const header = (
        <h1></h1>
    )

    const footer = (
        <h1></h1>
    )


    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}

export default Layout;