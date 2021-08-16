import { heroes } from "../data/heroes";

export const getHeroeById = (id) => {
    const validPublishes=['DC Comics', 'Marvel Comics']
    
    return heroes.find(h=> h.id===id);
}
