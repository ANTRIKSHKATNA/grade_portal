import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  let { id: roll_number } = useParams();
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://result-backenddata.onrender.com/user", {
          headers: {
            Roll_Number: roll_number,
          }
        });
        console.log(response);
        setStudentData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [roll_number]);

  console.log(studentData);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-blue-800 shadow-md rounded-lg p-4 sm:p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Student Details</h2>
          <div className="mb-2">
            <span className="font-semibold">Name: </span>{studentData.name}
          </div>
         
          <div className="mb-2">
            <span className="font-semibold">Roll Number: </span>{studentData.roll_number}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Batch: </span>{studentData.batch}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Branch: </span>{studentData.branch}
          </div>
          <div className="mb-2">
            <span className="font-semibold">CGPI: </span>{studentData.cgpi}
          </div>
        </div>
        <div>
          {studentData.semester_results ? (
            studentData.semester_results.map((semester, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-center"> Sem {semester.semester_number}</h3>
                <p className="text-center mb-4">CGPI: {semester.cgpi}, SGPI: {semester.sgpi}</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-800">
                    <thead>
                      <tr className="bg-blue-700">
                        <th className="py-2 px-4">Subject Name</th>
                        <th className="py-2 px-4">Subject Code</th>
                        <th className="py-2 px-4">Points</th>
                        <th className="py-2 px-4">Grade</th>
                        <th className="py-2 px-4">SubGP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.subject_results.map((subject, subIndex) => (
                        <tr key={subIndex} className="border-b border-gray-700">
                          <td className="py-2 px-4">{subject.subject_name}</td>
                          <td className="py-2 px-4">{subject.subject_code}</td>
                          <td className="py-2 px-4">{subject.sub_point}</td>
                          <td className="py-2 px-4">{subject.grade}</td>
                          <td className="py-2 px-4">{subject.sub_gp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Loading!!!!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
