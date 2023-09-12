import { Link, useLoaderData } from 'react-router-dom'
import { jobdata } from './JobData'
import Job from './Job'


export default function Blog() {


  return (
    <div className="faq">
      <h3>
        Unlock Your Career Potential: Explore Diverse Opportunities in the World
        of Tech Jobs!
      </h3>

      {jobdata.map((item) => {
        return <Job item={item} key={item.id} />
      })}
    </div>
  )
}
