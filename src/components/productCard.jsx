export function ProductCard(props) { //the component name should be in PascalCase
    console.log(props);

    return(
        <div className="border-b-amber-950 w-full h-full border-2 shadow-2xl justify-center items-center flex flex-col p-4 m-4">
            <h1>{props.name}</h1>
            <img src={props.image}></img>
            <p>Price : {props.price}</p>
        </div>
    )
}












