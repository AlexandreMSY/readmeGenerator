import React from 'react';

const FormContainer = (props) => {
    return(
        <>
           <div className='bg-gray-950 text-white h-screen p-8'>
                {props.children}
           </div>
        </>
    )
}

export default FormContainer