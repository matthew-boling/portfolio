import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Senior Site Reliability Engineer I",
      company: "YUM! BRANDS",
      period: "Apr 2025 – Present",
      location: "Louisville, KY",
      responsibilities: [
        "Architected and operated the global incident management platform supporting multiple international commerce platforms",
        "Designed scalable incident response processes and operational standards used across multiple brands and regions",
        "Replatformed the Datadog observability stack using Terraform, enabling consistent monitoring and infrastructure-as-code management across environments",
        "Partnered with application engineering teams to improve service instrumentation, monitoring coverage, and operational visibility",
        "Migrated the internal service catalog to GitLab with semantic versioning to improve service ownership and operational governance",
        "Collaborated with platform vendors to improve observability tooling and platform capabilities"
      ]
    },
    {
      title: "Site Reliability Engineer III",
      company: "YUM! BRANDS / PIZZA HUT",
      period: "Mar 2024 – Apr 2025",
      location: "Louisville, KY",
      responsibilities: [
        "Supported AWS-based global commerce platforms operating across 14 countries with a focus on reliability and operational stability",
        "Implemented a scalable incident management model using incident.io in partnership with globally distributed engineering teams",
        "Reduced Mean Time to Resolution (MTTR) by 12 hours by improving incident coordination and escalation procedures",
        "Reduced Mean Time to Mitigation (MTTM) by 95 hours through improved monitoring coverage and operational ownership",
        "Led a full observability audit across production services, reducing alert noise by 50% (4,000 → 2,000 monthly alerts)",
        "Improved operational dashboards and monitoring visibility using Datadog and Splunk"
      ]
    },
    {
      title: "Site Reliability Engineer II",
      company: "YUM! BRANDS / PIZZA HUT",
      period: "Nov 2022 – Mar 2024",
      location: "Louisville, KY",
      responsibilities: [
        "Led incident response for the U.S. e-commerce platform supporting nationwide operations",
        "Implemented observability improvements using New Relic and Splunk to increase service visibility",
        "Improved monitoring dashboards by migrating Splunk dashboards to log-based metrics, reducing load times from ~20s to ~5s"
      ]
    },
    {
      title: "Service Desk Technical Analyst Tier II",
      company: "YUM! BRANDS / PIZZA HUT",
      period: "Jul 2021 – Nov 2022",
      location: "Louisville, KY",
      responsibilities: [
        "Resolved Tier II escalations from frontline support and franchise locations within SLA targets",
        "Coordinated with third-party vendors to troubleshoot platform and in-store hardware issues",
        "Performed onsite hardware repair and replacement to minimize store downtime"
      ]
    }
  ]

  return (
    <section className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
