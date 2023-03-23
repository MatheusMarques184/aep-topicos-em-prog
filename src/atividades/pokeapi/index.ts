import { writeFile, readFile, appendFile } from 'fs/promises'

class pokeApi {

    public async getPokemon() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2")
        .then((response) => response.json())
        .then((data) =>  writeFile('pokemons.json', JSON.stringify(data.results, null, 2)));
    }

    public async getPokemonLocal() {
        const pokedex = JSON.parse(await readFile('pokemons.json', "utf-8"))
        pokedex.forEach(async (i) => {
            await fetch(i.url).then((response) => response.json())
                              .then((data) => appendFile('pokedex.json', JSON.stringify(data, null, 2)))
                        })
    }
}

const exec = new pokeApi()
exec.getPokemonLocal()