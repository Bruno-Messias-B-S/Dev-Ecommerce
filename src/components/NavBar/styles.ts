import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    height:101px;
    background-color:#0F52BA;
    display:flex;
    justify-content:space-between;
    align-items:center;

    
    @media (min-width:320px) and (max-width:425px) {
        height:48px;
    }
`;

export const Logo = styles.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:5%;
    height:30px;
`;

export const MKS = styles.div`
    color:white;

    .mks {
        font-weight: 600;
        font-weight: 600;
        font-size: 40px;
        line-height: 19px;
    }


    @media (min-width:320px) and (max-width:425px) {
        .mks {
            font-size:32px;
        }
    }
`;

export const Sistemas = styles.div`
    display:flex;
    align-items:end;
    height:100%;
    margin-left:10px;
    color:white;

    .sistemas {
        font-weight: 300;
        font-size: 20px;
        line-height: 19px;
    }


    @media (min-width:320px) and (max-width:425px) {
        .sistemas {
            font-size:16px;
        }
    }
`;

export const Carrinho = styles.div`
    width:90px;
    height:45px;
    background-color:white;
    border-radius:8px;
    margin-right:5%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;
    cursor:pointer;

    p {
        font-weight: 700;
        font-size: 18px;
    }


    @media (min-width:320px) and (max-width:425px) {
        width:52px;
        height:26px;
        gap:10px;
    }
`;

export const CarrinhoImg = styles.div`
    display:flex;
    justify-content:center;
    align-items:center;


    @media (min-width:320px) and (max-width:425px) {
        .carrinho {
            width:15px;
        }
    }
`;

export const ItemsQtd = styles.div`
    display:flex;
    justify-content:center;
    align-items:center;


    @media (min-width:320px) and (max-width:425px) {
        p {
            font-size:15px;
        }
    }
`;