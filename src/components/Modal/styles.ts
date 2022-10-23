import styles from 'styled-components';

export const CartOpen = styles.div`
    width:400px;
    height:100vh;
    position:fixed;
    top:0;
    right:0;
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);


    @media (min-width:320px) and (max-width:425px) {
        width:90%;
    }
`;

export const Title = styles.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:30px 40px;

    h3 {
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
        color:white;
    }

    .icon {
        cursor:pointer;
    }


    @media (min-width:320px) and (max-width:425px) {
        padding:20px 40px;
        padding-right:10px;

        h3 {
            font-size: 27px;
        }

        .icon {
            width:60px;
        }
    }
`;

export const ItensContainer = styles.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:0px 40px;
    flex:1;
    height:calc(100% - 240px);
    overflow:scroll;
    padding-top:10px;

    ::-webkit-scrollbar-track{
        background-color: #0F52BA;
    }

    ::-webkit-scrollbar{
        width:5px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: white;
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }


    @media (min-width:320px) and (max-width:425px) {
        flex-direction:column;
    }
`;

export const Itens = styles.div`
    background: white;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 15px 10px;
    position:relative;


    @media (min-width:320px)  and (max-width:425px) {
        flex-direction:column;
        padding:20px;
    }
`;

export const TotalFinalizar = styles.div`
    position:absolute;
    bottom:0;
    width:100%;
`;

export const Total = styles.div`
    width:100%;
    height:100%;
    flex:1;

    div {
        display:flex;
        justify-content:space-between;

        h5,
        span {
            font-weight: 700;
            font-size: 20px;
            line-height: 15px;
            color:white;
            padding:30px 40px;
        }
    }


    @media (min-width:320px) and (max-width:425px) {

        div {
            display:flex;
            justify-content:space-between;
            align-items:center;

            span,
            h5 {
                padding:30px 30px;
            }
        }
    }
`;

export const Finalizar = styles.div`
    width:100%;
    background-color:black;
    display:flex;
    justify-content:center;
    align-itens:center;
    flex:1;
    height:100%;

    button {
        background-color:transparent;
        border:none;
        font-weight: 700;
        font-size: 20px;
        line-height: 15px;
        color:white;
        cursor:pointer;
        width:100%;
        height:100%;
        padding:20px;
    }


    @media (min-width:320px) and (max-width:425px) {
        padding:5px;
    }
`;

export const Imagem = styles.div`
    background-color:red;
    display:flex;
    justify-content:center;
    align-items:center;
    width:50px;
    background-color:red;

    .closeBtn {
        position:absolute;
        top:0;
        right:0;
        margin-top:-3px;
        margin-right:-3px;
        cursor:pointer;
    }

    img {
        width:100%;
    }


    @media (min-width:320px) and (max-width:425px) {
        width:100px;

        .closeBtn {
            display:none;
        }
        
        .closeBtnMobile {
            width:50px;
            height:30px;
            position:absolute;
            right:0;
            top:10px;
        }
    }

    @media (min-width:426px) {
        .closeBtnMobile {
            display:none;
        }
    }
`;

export const ItemTitle = styles.div`
    width:90px;
    margin:5px;
    margin-right:10px;

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }


    @media (min-width:320px) and (max-width:425px) {
        width:100%;
        text-align:center;
        padding:10px 0px;

        p {
            font-size:18px;
        }
    }
`;

export const ControllerAndPrice = styles.div`
    flex:1;
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    padding-left:5px;

    @media (min-width:320px) and (max-width:425px) {
        width:100%;
        display:flex;
        justify-content:space-between;
        gap:20px;
    }
`;

export const QuantityController = styles.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    position:relative;
    width:50px;
;

    p {
        font-weight: 400;
        font-size: 10px;
        line-height: 6px;
        margin-top:-40px;
        width:100%;
    }

    div {
        background: #FFFFFF;
        border: 0.3px solid #BFBFBF;
        border-radius: 4px;
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        font-weight: 400;
        font-size: 15px;
        line-height: 10px;

        span {
            width:10px;
            text-align:center;
            font-size:13px;
        }

        button{
            font-size:13px;
            cursor:pointer;
            border:none;
            background-color:transparent;
        }
        
        button:first-child {
            border-right: 0.3px solid #BFBFBF;
            margin:2px 5px;
            padding-right:5px;
        }

        button:last-child {
            border-left: 0.3px solid #BFBFBF;
            margin:2px 5px;
            padding-left:5px;
        }
    }


    @media (min-width:320px) and (max-width:425px) {
        margin-left:10px;

        p {
            display:none;
        }

        div {
            padding:5px 5px;

            span,
            button {
                font-size:17px;
            }
        }
    }
`;

export const Price = styles.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:70px;
    margin-left:5px;

    p {
        font-weight: 700;
        font-size: 15px;
        line-height: 17px;
    }


    @media (min-width:320px) and (max-width:425px) {
        width:90px;
        border-radius: 5px;
        background-color:#373737;

        p {
            color:white;
            padding:10px 5px;
            font-size: 15px
        }
    }
`;
