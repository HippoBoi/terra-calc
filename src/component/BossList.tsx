import { Select } from '@chakra-ui/react'

interface Props {
    onChange: (newBoss: string) => void;
};

interface Boss {
    id: number;
    name: string;
    health: number;
    healthExpert: number;
    healthMaster: number;
};

export const bosses: { [key: string]: Boss } = {
    "eye": {
        id: 0,
        name: "Eye of Cthulu",
        health: 2800,
        healthExpert: 3640,
        healthMaster: 4641
    },
    "eater": {
        id: 1,
        name: "Eater of Worlds",
        health: 10050,
        healthExpert: 15120,
        healthMaster: 19224
    },
    "brain": {
        id: 2,
        name: "Brain of Cthulu",
        health: 3250,
        healthExpert: 5525,
        healthMaster: 7029
    },
    "skeletron": {
        id: 3,
        name: "Skeletron",
        health: 4400,
        healthExpert: 8800,
        healthMaster: 11220
    },
    "slime": {
        id: 4,
        name: "King Slime",
        health: 2000,
        healthExpert: 2800,
        healthMaster: 3570
    },
    "wall": {
        id: 5,
        name: "Wall of Flesh",
        health: 8000,
        healthExpert: 11200,
        healthMaster: 14280
    },
    "bee": {
        id: 6,
        name: "Queen Bee",
        health: 3400,
        healthExpert: 4760,
        healthMaster: 6069
    }
}

const BossList = ({ onChange }: Props) => {
    return (
        <Select onChange={(event) => onChange(event.target.value)}>
            {Object.keys(bosses).map((boss) => (
                <option key={bosses[boss].id} value={boss}>{bosses[boss].name}</option>
            ))}
        </Select>
    );
}

export default BossList
