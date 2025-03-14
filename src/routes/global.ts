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

let temp: Cansat[] = [{
    id: 0,
    latitude: 0,
    longitude: 0,
    velocidade: 0,
    gpsAltitude: 0,
    temperatura: 0,
    presssao: 0,
    altitude: 0,
    humidade: 0,
    pich: 0,
    roll: 0,
    yaw: 0,
    voltagem: 0,
    time: ""
}]; 

export const infoRows = writable(temp);