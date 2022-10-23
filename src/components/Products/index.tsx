import * as C from './styles';
import Skeleton from '../../Skeleton/index'
import { apiData } from '../../API/productsApi';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { FiShoppingBag } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice/cart';

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();

    useEffect( () => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        setLoading(false)
        let response = await apiData.getData();
        setProducts(response)
        setLoading(true)
    }

    return (
        <>
        {!loading &&
            <C.Container>
                <C.ProductsContainer>
                    {products.map( (item, index) => (
                        <C.Products key={index}>
                            <Skeleton width={`${100}%`} height={`${300}px`} borderRadius={10}/>
                        </C.Products>
                    ))}
                </C.ProductsContainer>
            </C.Container>
        }

        {loading &&
        <C.Container>
            <C.ProductsContainer>
                {products.map( (item, index) => (
                    <C.Products key={index} className="products">
                        <C.ProductPhoto>
                            <img src={`${item.photo}`}/>
                        </C.ProductPhoto>

                        <C.NamePrice>
                            <div className="name"><p>{item.name}</p></div>
                            <div className="price"><p>R${parseInt(item.price).toLocaleString('pt-BR')}</p></div>
                        </C.NamePrice>

                        <C.Desc>
                            <p>{item.description}</p>
                        </C.Desc>

                        <C.Comprar onClick={() => dispatch(addToCart(item))}>
                            <FiShoppingBag color={'white'}/>
                            <p>Comprar</p>
                        </C.Comprar>
                    </C.Products>
                ))}
            </C.ProductsContainer>
        </C.Container>
        }
        </>
    );
}