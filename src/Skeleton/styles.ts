import styles from 'styled-components';

export const Container = styles.div`
    background-image: linear-gradient(-90deg, white 0%, #F2F0ED 50%, white 100%);
    background-size:400% 400%;
    animation:shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }

        100% {
            background-position: -135% 0%;
        }
    }
`;