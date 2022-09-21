export interface AbilityScore {
    id: string;
    nameLong: string;
    nameShort: string;
    descriptionLong: string[];
    descriptionShort: string;
    //value: number;
    //modifier: number;
}

export interface AbilityScoreComplete extends AbilityScore{
    value: number;
    modifier: number;
}