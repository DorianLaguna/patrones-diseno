/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration(){
        console.log(`Configuracion de la computadora
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Almacentamiento: ${this.storage}
            GPU: ${this.gpu}
        `)
    }
}


class ComputerBuilder {
    private computer: Computer;

    constructor(){
        this.computer = new Computer()
    }

    setCPU(cpu: string): ComputerBuilder{
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build(){
        return this.computer
    }

}

function main() {
    const basicComputer = new ComputerBuilder()
                                .setCPU('Intel')
                                .setRAM('16GB')
                                .setStorage('1 TB')
                                .setGPU('ninguna')
                                .build() 

    console.log('%cComputadora basica:', COLORS.purple)
    basicComputer.displayConfiguration()


    const gamerComputer = new ComputerBuilder()
                                .setCPU('Razer mas avanzado')
                                .setRAM('62 GB')
                                .setRAM('64 GB')
                                .setStorage('4 TB')
                                .setGPU('RTX 5090')
                                .build()

    console.log('%cComputadora gamer:', COLORS.red)
    gamerComputer.displayConfiguration()
}

main()