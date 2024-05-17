import Button from './button'

export default function Item(props){
    return(
        <div id="item"> 
            <img src={props.img} alt="Item image" id="item_image"></img>
            <h2 id="item_name">Yumbox <br></br>{props.name}</h2>
            <p id="item_weight">{props.weight} гр</p>
            <Button id="item_button" cost={props.cost}></Button>
        </div>
    );
}