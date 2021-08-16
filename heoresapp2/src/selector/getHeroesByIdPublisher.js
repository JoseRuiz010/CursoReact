import { heroes } from "../data/heroes";

 
export const getHeroesByIdPublisher = (publisher) => {
     const validPublishes=['DC Comics', 'Marvel Comics']
     if(!validPublishes.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);

     }
     return heroes.filter(h=> h.publisher===publisher)
}
