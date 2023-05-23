function Item(props) {
    return (
       <>
           <li>{props.nome}</li>
           <ul>
            <li>{props.marca}</li>
            <li>{props.modelo}</li>                        
           </ul>
           
     </>
      )
 }
 
 export default Item;