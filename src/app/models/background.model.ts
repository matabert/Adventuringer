import { Feature } from "./feature.model";

export interface Background {
    id: string;
    name: string;
    exposition: string[];
    skills: string[];
    feature: Feature[];
}
