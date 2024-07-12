import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ index, name, cgpi, branch, batch, branchRank, yearRank, classRank, roll_number }) => {
  return (
    <Link to={`/card/${roll_number}`}>
      <div className="max-w-[30rem] overflow-hidden bg-blue-800 m-4 ml-8 rounded-lg text-white shadow-md">
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2 text-center">{index}. {name}</div>
          <p className="text-lg mb-2">Roll Number: <span className="font-semibold">{roll_number}</span></p>
          <p className="text-lg mb-2">CGPI: <span className="font-semibold">{cgpi.toFixed(2)}</span></p>
          <p className="text-lg mb-2">Branch: <span className="font-semibold">{branch}</span></p>
          <p className="text-lg mb-2">Batch: <span className="font-semibold">{batch}</span></p>
        </div>
        <div className="px-2 flex justify-between">
          <p className="text-base mb-2">Branch Rank: <span className="font-semibold">{branchRank}</span></p>
          <p className="text-base mb-2">Year Rank: <span className="font-semibold">{yearRank}</span></p>
          <p className="text-base mb-2">Class Rank: <span className="font-semibold">{classRank}</span></p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
