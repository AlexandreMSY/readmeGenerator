import React from 'react';

const DetailsForm = (props) => {

    const { handleChange } = props

    return(
        <>
            <div className='flex flex-col gap-20'>
                <h1 className='text-2xl tracking-wide font-medium'>Details</h1>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" name="projectName" id="projectName" placeholder="Readme Generator" onChange={handleChange} className='duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="projectDescription">Project Description</label>
                        <input type="text" name="description" id="description" placeholder="Generate READMES for your Github project" onChange={handleChange} className='duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="projectLink">Project Link</label>
                        <input type="link" name="projectLink" id="projectLink" placeholder="https://github.com/AlexandreMSY/readmeGenerator" onChange={handleChange} className='duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="projectLink">Logo</label>
                        <input type="file" name="logo" id="logo" className='duration-1000 w-full bg-transparent outline-none text-sm focus:border-lime-400'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsForm