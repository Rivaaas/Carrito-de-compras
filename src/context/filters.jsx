import { createContext } from "react";

//Crear el contexto
// Este es el que tenemos que consumir
export const FiltersContext = createContext()

//Crear el provider, para proveer el contexto
//Este es el que nos provee acceso al contexto 
export function FiltersProvider ({children}){
    return(
        <FiltersContext.Provider value={{
            //definir el estado inicial 
            category: 'all',
            minPrice: 0
            
        }}>
            {children}
        </FiltersContext.Provider>
    )
}