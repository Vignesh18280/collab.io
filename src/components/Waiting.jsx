import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Waiting() {
  //   const det = [{
  //       no : 1,
  //       roll : "22h51a0593",
  //       src : "#",
  //      },
  //      {
  //       no : 2,
  //       roll : "22h51a0594",
  //       src : "#",
  //      },
  //      {
  //       no : 3,
  //       roll : "22h51a0595",
  //       src : "#",
  //      }
  // ];
  const [det, setDet] = useState([]);
  const [link, setlink] = useState('');
  const id = useParams().orgId;
  let handleSubmit = async(e) => {
    e.preventDefault();
    console.log(approve);
    await axios.post(`http://localhost:5050/org/${id}/${link}/approve`, approve)
    .then(res => {
      if(res.status === 200) {
        alert('Approved');
        window.location.reload();
      }
      else {
        alert('Not Approved');
        window.location.reload();
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  const [approve, setApprove] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5050/org/${id}/wlistp`)
    .then(res => {
      console.log(res.data);
      setDet(res.data);
    })
    .catch(err => {
      console.log(err);
    })    
  }, [])
  return(
    <div className="m-10 mb-20">
     <div>
      <h2 class="text-white text-center underline font-bold leading-tight">PROJECT APPROVAL</h2>
    </div>
    <div class="flex justify-center -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-fit shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-fit leading-normal">
          <thead>
            <tr>
            <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Number
              </th>

              <th
                class="px-8 py-5 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Roll No.
              </th>

              <th
                class="px-8 py-5 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Project
              </th>

              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Approve/Reject
              </th>
            </tr>
          </thead>
          <tbody>
            {det.map((node)=>{
                return(
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">{node.id}</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-white text-bold mt-3 whitespace-no-wrap">
                      <Link to={`https://www.youtube.com/watch?v=o6xikISiz2w&t=876s`}  > video link</Link>
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <p class="text-white whitespace-no-wrap">{node.title}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <form onSubmit={handleSubmit}>
                    <div class="mt-8">
                        <button class="bg-green-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-800" onClick={() => {setApprove({approve: true}); setlink(node.id)}} type='submit'>Accept</button>
                    </div>
                    <div class="mt-8">
                        <button class="bg-red-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-800" onClick={() => {setApprove({approve: false}); setlink(node.id)}} type='submit'>Regect</button>
                    </div>
                </form>   
              </td>
            </tr> 
                )
            })}
        </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Waiting;