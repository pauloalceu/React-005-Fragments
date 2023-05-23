import Item from './Item';


function list() {
   return (
      <>
      <h1> Minha lista</h1>
      <ul>
          <Item nome="carro 1" modelo="f1" marca="Ferrari" />
          <Item nome="carro 2" modelo="ka" marca="Ford" />
      </ul>
    </>
     )
}

export default list;