export function ProductCard(props) { //the component name should be in PascalCase
    console.log(props);

    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.image}></img>
            <p>Price : {props.price}</p>
        </div>
    )
}












