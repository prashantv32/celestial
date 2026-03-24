function MainContent({ apod, fetchRandom }) {
    if (!apod) return <div className="loading">🌌 Loading from the cosmos...</div>

    return (
        <main className="main">
            <div className="card">
                <h2 className="apod-title">{apod.title}</h2>
                <p className="apod-date">{apod.date}</p>

                {apod.media_type === "image"
                    ? <img src={apod.hdurl || apod.url} alt={apod.title} className="apod-image"/>
                    : <div className="video-fallback">
                        <p>📹 This APOD is a video</p>
                        <a href={apod.url} target="_blank">Watch on NASA ↗</a>
                      </div>
                }

                <p className="apod-explanation">{apod.explanation}</p>
                <button className="btn" onClick={fetchRandom}>✦ Random Image</button>
            </div>
        </main>
    )
}
export default MainContent