
const Job = ({item}) =>{

    return(
        <>
        <div className="question">
        <p>
          <strong>Company :  </strong> <span> {item.company}</span>
        </p>
        
        <p>
          <strong>Position :  </strong> <span> {item.position}</span>
        </p>

        <p>
          <strong>Location :  </strong> <span> {item.location}</span>
        </p>

        <p>
          <strong>Description :  </strong> <br /><span> {item.description}</span>
        </p>

        <p>
          <strong>Requirements :  </strong> <span> {item.requirements}</span>
        </p>

        <p>
          <strong>Salary :  </strong> <span> {item.salary}</span>
        </p>
        <p>
          <strong>Posted Date :  </strong> <span> {item.postedDate}</span>
        </p>

      </div>
        </>

    )
}
export default Job;