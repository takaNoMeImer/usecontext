import Formulario from "./FormularioRemove";
import CardItem from "./Item";
import { useContainer } from "../hooks/useContainer";

const Container = () => {

    const { listItem,lenguajes, deleteAll, testItem, recibirItem, deleteElement } = useContainer()

    return (
        <div>
            <div className="container mt-5">
                <div className="actions">
                    <button onClick={ deleteAll } className="btn btn-danger">Delete All</button>
                </div>
            </div>

            <div className="grid-container container mt-5">
                <div className="grid-item-container">
                    {lenguajes?.map(item => (
                        <CardItem test={recibirItem} update={deleteElement} key={item.id} item={item} />
                    ))}
                </div>

                <div className="grid-item-list">
                    <Formulario add={testItem} />
                    <h1 className={'text-center'}>Favoritos</h1>
                    {listItem.map((item) => (
                        <div className="p-4 item-card" key={item.id} style={{ width: '22rem' }}>
                            <div className="content-item">
                                <img src={item?.poster} alt="" />
                                <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <h3 className="card-title" style={{ textAlign: 'center' }}>{item?.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Container;