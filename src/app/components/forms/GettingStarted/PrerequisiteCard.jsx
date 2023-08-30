import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const PrerequisiteCard = (props) => {
  const { name, code, deleteButtonAction } = props;
  return (
    <>
      <div className="flex flex-row gap-3 border border-neutral-700 rounded-md">
        <div className="flex place-content-center gap-3 pl-3">
          <button onClick={deleteButtonAction}>
            <DeleteIcon color="error" />
          </button>
          <div class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-50" />
        </div>
        <div className="flex flex-col gap-1 w-full py-3 pr-3 max-w-[90%]">
          <p>{name}</p>
          <p className="bg-slate-800 p-4 font-mono text-sm break-words">
            {code}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrerequisiteCard;
