import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const categoriasRandom = ['Parasite', 'One Punch', 'Tokyo Ghoul']
let init = ['Naruto', 'Attack On Titans', 'Kimetzu no Yaiba']

const GifExpertApp = ({defaultCategories = []}) => {


    const [categorias, setCategorias] = useState(defaultCategories)


    // const handleAdd = () => {
    //     const categoriasRandomNro = Math.floor(Math.random()*3)
    //     const valorAPoner = categoriasRandom[categoriasRandomNro]
    //     setCategorias([valorAPoner,...categorias])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategorias={setCategorias}/>
            <hr/>

            <ol>
                {
                    categorias.map((each) =>
                    <GifGrid 
                        key={each}
                        category={each}
                    />)
                }
            </ol>
        </>
    )
} 

export default GifExpertApp