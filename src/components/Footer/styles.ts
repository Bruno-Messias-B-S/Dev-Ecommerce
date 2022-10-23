import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    background-color:#EEEEEE;
    height:34px;
    display:flex;
    justify-content:center;
    align-items:center;

    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;
        color: black;
    }


    @media (min-width:320px) and (max-width:425px) {
        p {
            font-size:12px;
        }
    }
`;