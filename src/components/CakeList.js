import Cake from "./Cake";
const CakeList = ({cakes}) => {

    return (
        <>
        {
           cakes.map((cake, index)=> {
            return <Cake key={index} name={cake.name} ingredients={cake.ingredients} rating = {cake.rating}/>
           })
        }
        </>
    )
}

export default CakeList;