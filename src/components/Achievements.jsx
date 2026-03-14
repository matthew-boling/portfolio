import './Achievements.css'

function Achievements() {
  const achievements = [
    {
      metric: "50%",
      description: "Reduced alert noise, lowering monthly alerts from ~4,000 to ~2000 after conducting a full observability audit",
      graph: "M 0 20 L 20 22 L 40 28 L 60 40 L 80 52 L 100 62 L 120 68 L 140 72 L 160 76 L 180 80"
    },
    {
      metric: "12 hours",
      description: "Reduced Mean Time to Resolution (MTTR) through standardized incident response processes",
      graph: "M 0 20 L 20 25 L 40 30 L 60 45 L 80 60 L 100 70 L 120 75 L 140 78 L 160 79 L 180 80"
    },
    {
      metric: "95 hours",
      description: "Reduced Mean Time to Mitigation (MTTM) through improved monitoring coverage and operational ownership",
      graph: "M 0 15 L 20 18 L 40 25 L 60 40 L 80 55 L 100 65 L 120 72 L 140 76 L 160 78 L 180 80"
    },
    {
      metric: "94% → 96%",
      description: "Increased platform availability across global commerce systems after implementing a scalable incident management model",
      graph: "M 0 50 L 20 48 L 40 45 L 60 40 L 80 35 L 100 30 L 120 25 L 140 22 L 160 20 L 180 18"
    }
  ]

  return (
    <section className="achievements">
      <div className="container">
        <h2>Key Reliability Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <svg className="achievement-graph" viewBox="0 0 180 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={index === 0 ? "#00ff41" : index === 1 ? "#00d9ff" : index === 2 ? "#ffb000" : "#00ff41"} stopOpacity="0.3"/>
                    <stop offset="100%" stopColor={index === 0 ? "#00ff41" : index === 1 ? "#00d9ff" : index === 2 ? "#ffb000" : "#00ff41"} stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                <path
                  d={`${achievement.graph} L 180 100 L 0 100 Z`}
                  fill={`url(#gradient-${index})`}
                />
                <path
                  d={achievement.graph}
                  stroke={index === 0 ? "#00ff41" : index === 1 ? "#00d9ff" : index === 2 ? "#ffb000" : "#00ff41"}
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div className="achievement-metric">{achievement.metric}</div>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
