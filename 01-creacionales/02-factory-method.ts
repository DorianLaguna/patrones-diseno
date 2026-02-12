/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { error } from "node:console";
import { COLORS } from "../helpers/colors.ts";


interface Hamburguer {
    prepare(): void;   
}

class ChickenHamburguer implements Hamburguer {
    prepare(): void {
      console.log('preparando hamburguesa de pollo', COLORS.yellow)
    }
}
class BeefHamburguer implements Hamburguer {
    prepare(): void {
      console.log('preparando hamburguesa de res', COLORS.yellow)
    }
}

class BeanHamburguer implements Hamburguer {
  prepare(): void {
    console.log('preparando hamburguesa de frijoles, que asco', COLORS.cyan)
  }
}

abstract class Restaurant {
    abstract createHamburguer(): Hamburguer;

    orderHamburguer(): void {
        const hamburguer = this.createHamburguer();
        hamburguer.prepare();
    }
}

class BeanRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new BeanHamburguer()
  }

}

class ChickeRestaurant extends Restaurant {
    override createHamburguer(): Hamburguer {
      return new ChickenHamburguer()
    }
}
class BeefRestaurant extends Restaurant {
    override createHamburguer(): Hamburguer {
      return new BeefHamburguer()
    }
}

function main(){

    let restaurant: Restaurant;
    const burgerType = prompt('Que hamburguesa quieres? ( chiken/beef/bean )')
    switch(burgerType){
        case 'chicken':
            restaurant = new ChickeRestaurant()
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        default:
            throw new Error('no existe ninguna hamburguesa de ese tipo')
    }

    restaurant.orderHamburguer();
}

main()
