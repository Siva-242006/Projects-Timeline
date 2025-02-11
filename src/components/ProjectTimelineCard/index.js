import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  return (
    <div className="project-card">
      <img src={details.imageUrl} alt="project" className="project-img" />
      <div className="title-duration-container">
        <h1 className="title-heading">{details.projectTitle}</h1>
        <div className="icon-duration-container">
          <AiFillCalendar className="calender-icon" />
          <p>{details.duration}</p>
        </div>
      </div>
      <p className="description">{details.description}</p>
      <a href={details.projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
