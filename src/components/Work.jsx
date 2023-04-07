import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2023,
        title: 'Back End Manager',
        duration: '1 year',
        details: 
        'I work for a online store based on Shoppify. I create and manage the backend of the store while also assisting with any and all tasks to make sure sales are being processed ina timely manner. From simple tasks such as adding products to creating custom CSS styling, I am dedicated to providing the best possible service.'
    },
    {
        year: 2022,
        title: 'Youth Soccer Coach',
        duration: '2 years',
        details: "I work one-on-one with players to imrpove their soccer skills and develop personalized training programs. I consult with parents and gaurdians to understand the player's strenghts and weaknesses all while providing information feedback on progress. I create a fun and safe environment that allows players to push themselves an achieve their goals. Additionally, I provide tailored training plans for players to continue their progress outside of coaching sessions."
    },
    {
        year: 2021,
        title: 'Mortage Loan Officer',
        duration: '2 years',
        details: "During my time at Amerisave Mortgage Corporation, I assited current and prospective homeowners with purchasing a new home or refinancing their current mortgage. I provided exceptional customer service by maintaining a courteous and patient approach when explaining complex mortgage terms and laws. Through my representation of the company, I maintained a high level of professionalism and consistently exceeded sales goals. Additionally, I adapted my communication style to effectively connect with a diverse range of customers, understanding their unique needs and providing tailored solutions."
    },
    {
        year: 2020,
        title: 'Manager/Brand Ambassador',
        duration: '3 years',
        details:
        "As a manager for Arch Telecom, I consstently delivered exceptional customer service by understanding and fulfilling customer needs while maximizing sales potential. I demonstrated strong leadership skills by overseeing hiring, training, and guidance to maintain high sales quotas and customer satisfaction ratings. I was also the designated Apple Ambassador, responsible for providing expert-level knowledge related to Apple products. Additionally, I participated in multi-store event team, where I maintained an organized list of ongoing events and interactions to improve future engagement."
    },
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