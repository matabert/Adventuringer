import { Feature } from "./feature.model";

export interface Race {
    id: string;
    name: string;
    exposition: string[];
    age?: string;
    size?: string;
    speed?: string;
    features: Feature[];
    languages?: string[];
    subraces?: string[];
}
