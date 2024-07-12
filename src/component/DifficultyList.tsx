import { RadioGroup, Radio } from '@chakra-ui/react';

interface Props {
    onChange: (newDiff: string) => void;
}

const DifficultyList = ({ onChange }: Props) => {
    return (
        <RadioGroup onChange={(event) => onChange(event)}>
            <Radio value="classic">Classic</Radio>
            <Radio marginLeft={"8px"} value="expert">Expert</Radio>
            <Radio marginLeft={"8px"} value="master">Master</Radio>
        </RadioGroup>
    );
}

export default DifficultyList
