import { useState } from 'react'
import './App.css'

const initialData = {
  name: '',
  job: '',
  email: '',
  phone: '',
  location: '',
  summary: '',
  skills: '',
  education: '',
  experience: ''
}

function App() {
  const [data, setData] = useState(initialData)

  function update(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function printResume() {
    window.print()
  }

  return (
    <main className="app">
      <header className="header">
        <div className="brand">Resume<span>Craft</span></div>
        <p>Create a professional resume for your next opportunity.</p>
      </header>

      <div className="layout">
        <section className="form-panel">
          <h2>Build your resume</h2>
          <p className="muted">Enter your details below.</p>

          <form>
            <label>Full name
              <input name="name" value={data.name} onChange={update}
                placeholder="Your full name" />
            </label>

            <label>Job title
              <input name="job" value={data.job} onChange={update}
                placeholder="e.g. Sales Executive" />
            </label>

            <div className="two-columns">
              <label>Email
                <input type="email" name="email" value={data.email}
                  onChange={update} placeholder="you@example.com" />
              </label>
              <label>Phone
                <input name="phone" value={data.phone} onChange={update}
                  placeholder="Phone number" />
              </label>
            </div>

            <label>Location
              <input name="location" value={data.location} onChange={update}
                placeholder="City, State" />
            </label>

            <label>Professional summary
              <textarea name="summary" value={data.summary} onChange={update}
                placeholder="Briefly describe your experience and goals." />
            </label>

            <label>Skills
              <textarea name="skills" value={data.skills} onChange={update}
                placeholder="Customer service, communication, computer skills..." />
            </label>

            <label>Education
              <textarea name="education" value={data.education}
                onChange={update} placeholder="Qualification, institution, year" />
            </label>

            <label>Work experience
              <textarea name="experience" value={data.experience}
                onChange={update} placeholder="Job title, employer, responsibilities" />
            </label>

            <button type="button" onClick={printResume}>
              Print / Save as PDF
            </button>
          </form>
        </section>

        <section className="preview-panel">
          <div className="preview-heading">LIVE PREVIEW</div>

          <article className="resume">
            <h1>{data.name || 'Your Name'}</h1>
            <h3>{data.job || 'Your Professional Title'}</h3>

            <p className="contact">
              {[data.email, data.phone, data.location]
                .filter(Boolean).join(' • ') || 'Your contact details'}
            </p>

            <hr />

            <h2>PROFILE</h2>
            <p className="resume-text">
              {data.summary || 'Your professional summary will appear here.'}
            </p>

            <h2>SKILLS</h2>
            <p className="resume-text">
              {data.skills || 'Add your skills in the form.'}
            </p>

            <h2>WORK EXPERIENCE</h2>
            <p className="resume-text">
              {data.experience || 'Add your work experience.'}
            </p>

            <h2>EDUCATION</h2>
            <p className="resume-text">
              {data.education || 'Add your education details.'}
            </p>
          </article>
        </section>
      </div>

      <footer>ResumeCraft · Your career, clearly presented.</footer>
    </main>
  )
}

export default App