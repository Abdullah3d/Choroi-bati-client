import  { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Card from '../../../components/Card/Card';

const CheafRecomand = () => {
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setChef(data)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading="Chef Recommends"
                subHeading="Should try"
            ></SectionTitle>
            
                <div className='flex gap-4 justify-center'>
                    {
             chef?.splice(0,3).map((item)=>(
                    <Card key={item._id} image={item?.image} recipe={item?.recipe} name={item?.name}  />
             ))

                    }
                </div>
            
            </div>
    );
};

export default CheafRecomand;