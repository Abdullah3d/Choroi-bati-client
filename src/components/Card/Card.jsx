
const Card = ({ image, recipe, name } ) => {
    return (
        <>
            <div className="card bg-gray-100 rounded-none w-96 ">
                <figure className="w-full">
                    <img
                        src={image}
                        alt={name}
                        className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 mt-5 text-orange-500 hover:text-orange-500">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;