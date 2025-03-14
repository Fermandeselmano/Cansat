import { writable } from "svelte/store";

export interface Cansat {
    id: number;
    latitude: number;
    longitude: number;
    velocidade: number;
    gpsAltitude: number;
    temperatura: number;
    presssao: number;
    altitude: number;
    humidade: number;
    pich: number;
    roll: number;
    yaw: number;
    voltagem: number;
    time: string;
}

let temp: Cansat[] = []; 

export const infoRows = writable(temp);