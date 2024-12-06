const Hero = () => {
    return (
        <>
            <h1>
                Coffee Tracking for Caffine <abbr title="An enthausiast or devote">fiends</abbr>!
            </h1>
            <div className="benefits-lists">
                <h3 className="font-bolder">Try <span className="text-gradient">Caffined</span> and start</h3>
                <p>✅ Tracking every coffee</p>
                <p>✅ Measuring your blood caffine levels</p>
                <p>✅ Costing and quanitfying your addiction</p>
            </div>
            <div className="card info-card">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know ...</h3>
                </div>
                <h5>That Caffine&apos;s half life is about 5-hours ? </h5>
                <p>This means after 5 hours , half the caffine you consumed is still in your system, keeping your alert longer! So if you drink a coffee with 200 mg of caffeine , 5 hours , later , you&apos;ll have about 100 mg of caffine in your system. </p>
            </div>
        </>
    )
}

export default Hero;