import * as C from './styles';

type Props = {
    width: number | string,
    height: number | string,
    borderRadius?: number;
}

function Skeleton({ width, height, borderRadius }: Props) {
    return (
        <C.Container style={{ width, height, borderRadius }}/>
    )
}

export default Skeleton;