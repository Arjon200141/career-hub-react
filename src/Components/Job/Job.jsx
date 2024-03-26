import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="card bg-base-100 shadow-xl pt-4 ">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{job_title}</h2>
                <h3 className="text-lg">{company_name}</h3>
                <div className="card-actions gap-6 ">
                    <button className="btn bg-white border-1 border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="btn bg-white border-1 border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-1"><CiLocationOn /> {location}</p>
                        <p className="flex items-center gap-1"><AiOutlineDollarCircle /> {salary}</p>
                    </div>
                    <button className="btn bg-[#7E90FE] text-white text-xl font-semibold w-[200px]">View Details</button>
            </div>
            
        </div>
    );
};

export default Job;