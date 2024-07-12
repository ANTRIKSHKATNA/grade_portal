import React, { useState } from 'react';
import Card from './Card';
import { data } from '../../public/DATA_RESULT/data';
import bgimg2 from '../../public/DATA_RESULT/bgimg1.jpg';

const Cards = () => {
  const [students, setStudents] = useState(data);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterData(selectedBranch, selectedBatch, e.target.value);
  };

  const handleBranchChange = (e) => {
    const branch = e.target.value;
    setSelectedBranch(branch);
    filterData(branch, selectedBatch, searchQuery);
  };

  const handleBatchChange = (e) => {
    const batch = e.target.value;
    setSelectedBatch(batch);
    filterData(selectedBranch, batch, searchQuery);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortData(order);
  };

  const filterData = (branch, batch, search) => {
    let filteredData = data;

    if (branch) {
      filteredData = filteredData.filter(student => student.branch === branch);
    }
    if (batch) {
      filteredData = filteredData.filter(student => student.batch === batch);
    }
    if (search) {
      const query = search.toLowerCase();
      filteredData = filteredData.filter(student =>
        student.name.toLowerCase().includes(query) || student.roll_number.toLowerCase().includes(query)
      );
    }

    setStudents(filteredData);
  };

  const sortData = (order) => {
    const sortedData = [...students].sort((a, b) => {
      if (order === 'asc') {
        return a.cgpi - b.cgpi;
      } else {
        return b.cgpi - a.cgpi;
      }
    });

    setStudents(sortedData);
  };

  return (
    <div className="flex flex-col items-center bg-fixed bg-gradient-to-r from-gray-800 to-gray-900 text-white" >
      <div className="flex flex-wrap justify-center my-4 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Search by student name or roll number"
        
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md mb-2 md:mr-2 md:mb-0 w-full md:w-auto text-slate-400"
        />

        <select
          value={selectedBranch}
          onChange={handleBranchChange}
          className="p-2 border border-gray-300 rounded-md mb-2 md:mr-2 md:mb-0 w-full md:w-auto font-serif text-slate-400"
        >
          <option value="">All Branches</option>
          <option value="Architecture">Architecture</option>
          <option value="Chemical">Chemical</option>
          <option value="Civil">Civil</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Computer Science Dual">Computer Science Dual</option>
          <option value="Electrical">Electrical</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics Dual">Electronics Dual</option>
          <option value="Engineering Physics">Engineering Physics</option>
          <option value="Material">Material</option>
          <option value="Maths & Computing">Maths & Computing</option>
          <option value="Mechanical">Mechanical</option>
        </select>

        <select
          value={selectedBatch}
          onChange={handleBatchChange}
          className="p-2 border border-gray-300 rounded-md mb-2 md:mr-2 md:mb-0 w-full md:w-auto text-slate-400"
        >
          <option value="">All Batches</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>

        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded-md w-full md:w-auto text-slate-400"
        >
          <option value="asc">Sort by CGPI (Low to High)</option>
          <option value="desc">Sort by CGPI (High to Low)</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center w-full max-w-6xl">
        {students.length === 0 ? (
          <div className="text-red-500 mt-4">NO RESULTS FOUND!!!</div>
        ) : (
          students.map((student, index) => (
            <div key={student.roll_number} className="w-full sm:w-1/2 md:w-1/3 p-2">
              <Card
                index={index + 1}
                name={student.name}
                cgpi={student.cgpi}
                roll_number={student.roll_number}
                branch={student.branch}
                batch={student.batch}
                branchRank={student.branch_rank}
                yearRank={student.year_rank}
                classRank={student.class_rank}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
