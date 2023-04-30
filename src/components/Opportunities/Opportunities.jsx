import "./Opportunities.css"
import JobList from "../JobList/JobList";
import JobDescription from "../JobDescription/JobDescription";

const Opportunities = () => {
    return <div className="opportunities">
        <JobList />
        <JobDescription />
    </div>;
}

export default Opportunities;