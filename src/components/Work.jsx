import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2020,
        title: 'Manager/Brand Ambassador',
        duration: '3 years',
        details:
        'lorem Ipsum'
    },
    {
        year: 2023,
        title: 'Back End Manager',
        duration: '1 year',
        details: 
        'lorem Ipsum'
    }
]
function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-{#fff0db}'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default Work