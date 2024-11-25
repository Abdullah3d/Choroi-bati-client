// import FoodCard from "../../../components/FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const OrderTab = ({ items }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     };
//     return (
//         <div>
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className='grid md:grid-cols-3 gap-10'>
//                         {
//                             items.map(item => <FoodCard
//                                 key={item._id} item={item} />)
//                         }
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;

import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Helper function to split items into chunks of 6
const chunkItems = (items, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += chunkSize) {
        chunks.push(items.slice(i, i + chunkSize));
    }
    return chunks;
};

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // Chunk the items into groups of 6
    const chunkedItems = chunkItems(items, 6);

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {chunkedItems.map((chunk, index) => (
                    <SwiperSlide key={index}>
                        <div className='grid md:grid-cols-3 gap-10 p-2'>
                            {chunk.map(item => (
                                <FoodCard key={item._id} item={item}/>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderTab;
