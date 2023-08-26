import React from "react";
//import trash from "../../../../public/trash.svg";
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';

const TechCard = (props) => {
  const { name, deleteBtnAction, children} = props;

  return (
    <> 
      <div className="flex flex-col border border-cyan-500 border-2 rounded-lg py-2 px-6 max-w-xs">
        <h1 className="font-semibold text-center truncate ... ">{name}</h1>
        <button className="text-sm" onClick={deleteBtnAction}>
          <DeleteIcon sx={{ color: 'red' }} />
        </button>
      </div>
    </>
  );
};

export default TechCard;
