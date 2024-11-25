import React from 'react';
import bg from "../../../assets/home/chef-service.jpg"

const Bistroboss = () => {
    return (
        <div className='p-[110px] ' style={{ backgroundImage: `url(${bg})` }}>

            <div className='text-center px-[160px] py-[100px] bg-white'>
                <h3 className='text-4xl font-semibold'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br />deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at,nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Bistroboss;