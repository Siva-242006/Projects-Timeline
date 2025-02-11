import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  return (
    <div className="course-card">
      <div className="title-duration-container">
        <h1 className="title-heading">{details.courseTitle}</h1>
        <div className="icon-duration-container">
          <AiFillClockCircle className="duration-icon" />
          <p>{details.duration}</p>
        </div>
      </div>
      <p className="description">{details.description}</p>
      <ul className="tags-container">
        {details.tagsList.map(each => (
          <li className="tag-items-list">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
