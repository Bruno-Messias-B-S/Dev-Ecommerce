import styles from 'styled-components';

export const Container = styles.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height: 100vh;
    margin-top:20px;
    margin-bottom:20px;
    

    @media (min-width:320px) and (max-width:425px) {
        height:100%;
        margin-top:20px;
        margin-bottom:20px;
    }

    @media (min-width:768px) and (max-width:1023px) {
        height:100%;
        margin-top:20px;
        margin-bottom:20px;
    }
`;

export const ProductsContainer = styles.div`
    width: 80%;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
    

    @media (min-width:320px) and (max-width:425px) {
        grid-template-columns: repeat(1, 1fr);
        width:70%;
    }

    @media (min-width:768px) and (max-width:1023px) {
        grid-template-columns: repeat(2, 1fr)
    }
`;

export const Products = styles.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ProductPhoto = styles.div`
    height:150px;
    margin:auto;

    img {
        width:100%;
        height:100%;
    }
`;

export const NamePrice = styles.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:13px;

    .name {
        p {
            font-weight: 600;
            font-size: 16px;
            color: #2C2C2C;
        }
    }

    .price {
        p {
            font-weight: 700;
            font-size: 15px;
            line-height: 15px;
            background-color:#373737;
            color:white;
            padding:6px;
            border-radius:5px;
        }
    }
`;

export const Desc = styles.div`
    margin-top:-8px;
    margin-bottom:5px;
    height:70px;

    p {
        font-weight: 300;
        font-size: 11px;
        line-height: 14px;
        margin:13px;
    }

    
    @media (min-width:320px) and (max-width:425px) {
        height:90px;
    }

    @media (min-width:1024px) and (max-width:1439px) {
        height:80px;
    }
`;

export const Comprar = styles.div`
    background-color:#0F52BA;
    border-radius: 0px 0px 8px 8px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    cursor:pointer;

    p {
        font-size:16px;
        padding:8px;
        font-weight: 600;
        line-height: 18px;
        color:white;
    }
`;