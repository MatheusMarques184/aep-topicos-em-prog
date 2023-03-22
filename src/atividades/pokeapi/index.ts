import { writeFile } from 'fs/promises'

class pokeApi {

    public async getPokemon() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2")
        .then((response) => response.json())
        .then((data) =>  writeFile('pokedex.json', JSON.stringify(data.results, null, 2)));
    }

}

const exec = new pokeApi()
exec.getPokemon()