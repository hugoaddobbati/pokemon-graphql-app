
import {gql} from 'apollo-boost';

const getPokemonsQuery = gql`
        {
        pokemons(first: 151) {
        id
        number
        name
        attacks {
            special {
            name
            type
            damage
            }
        }
        evolutions {
            id
            number
            name
            weight {
            minimum
            maximum
            }
            attacks {
            fast {
                name
                type
                damage
            }
            }
        }
        }
    }
  
`

const getPokemonQuery = gql`
    query($name: String!){
    pokemon(name: $name) {
      id
      number
      name
      types
      attacks {
        special {
          name
          type
          damage
        }
        fast {
            name
            type
            damage
        }
      }
      evolutions {
        id
        number
        name
      }
    }
  }
  
`

export {getPokemonsQuery, getPokemonQuery};