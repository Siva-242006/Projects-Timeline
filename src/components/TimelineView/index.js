import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <>
      <div className="container">
        <h1 className="heading">
          MY JOURNEY OF <br /> CCBP 4.0
        </h1>
      </div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: '#0967d2',
          secondary: 'white',
          titleColor: '#0967d2',
        }}
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard key={each.id} details={each} />
          }
          return <ProjectTimelineCard key={each.id} details={each} />
        })}
      </Chrono>
    </>
  )
}

export default TimelineView
