import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "GCP", "Terraform", "Terragrunt"]
    },
    {
      title: "Site Reliability Engineering",
      skills: [
        "Incident Management & Response",
        "Service Reliability & Availability Engineering",
        "Operational Readiness & Post-Incident Review"
      ]
    },
    {
      title: "Observability & Monitoring",
      skills: [
        "Datadog",
        "Splunk",
        "New Relic",
        "Alert Noise Reduction & Monitoring Strategy"
      ]
    },
    {
      title: "Engineering & Tooling",
      skills: ["Go (Golang)", "GitLab", "GitHub", "CI/CD (GitLab, CircleCI)"]
    }
  ]

  return (
    <section className="skills">
      <div className="container">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
