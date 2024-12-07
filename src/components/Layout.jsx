const Layout = (props) => {

    const { children } = props;

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">Caffiend</h1>
                <p>For coffee Insatiates</p>
            </div>
            <button>
                <p>Sign Up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span>Caffiend</span> was made by <a href="https://www.instagram.com/flex__x.d?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Flex</a> by using the <a href="https://www.fantacss.smoljames.com/">Fanta CSS</a> design libaray by smoljames .</p>
        </footer>
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