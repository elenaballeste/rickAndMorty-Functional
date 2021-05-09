import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../../components/Character/Character';
import Pager from '../../components/Pager/Pager';
import Spinner from '../../UI/Spinner/Spinner';
import characterClass from './characterClass';
import classes from './Characters.module.scss';

const Characters = () => {
    const [charactersData, setCharactersData] = useState<characterClass>({
        characters: [],
        nextUrl: '',
        prevUrl: '',
        currentPage: '',
        totalPages: 0
    })
    const [currentUrl, setCurrentUrl] = useState('https://rickandmortyapi.com/api/character')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // if (localStorage.page && localStorage.page !== '1') {
        //     getCharacters(currentUrl + '?page=' + localStorage.page)
        // } else {
        //     getCharacters(currentUrl)
        // }
        // return () => {
        //     localStorage.setItem('page', charactersData.currentPage)
        // }
        getCharacters(currentUrl)
    }, [currentUrl])
    // }, [currentUrl, charactersData.currentPage])
    // }, [])

    const getCharacters = (url: string) => {
        setLoading(true)
        axios.get(url)
            .then(response => {
                setCharactersData((prevState) => {
                    return {
                        ...prevState,
                        characters: response.data.results,
                        nextUrl: response.data.info.next,
                        prevUrl: response.data.info.prev,
                        currentPage: url.includes("page=") ? url.split("page=").pop()! : "1",
                        totalPages: response.data.info.pages
                    }
                })
                setLoading(false)
            })
            .catch(error => {
                console.log('We could not retireve the data:', error)
                setLoading(false)
            })
    }
    const selectedCharacterHandler = (id: number) => {
        const selectedCharacter = charactersData.characters.filter(item => item.id === id)[0]
        console.log(selectedCharacter)
        // Alternative option
        // axios.get('https://rickandmortyapi.com/api/character/' + id)
        //     .then(response => {console.log(response.data)})
        //     .catch(error => {console.log(error)})
    }
    const nextPageHandler = () => {
        setCurrentUrl(charactersData.nextUrl)
    }
    const prevPageHandler = () => {
        setCurrentUrl(charactersData.prevUrl)
    }

    const characters = charactersData.characters.map(character => {
        return <Character
            name={character.name}
            img={character.image}
            key={character.id}
            clickedItem={() => selectedCharacterHandler(character.id)}/>
    })

    return (
        <div>
            <Pager
                clickedNext = {nextPageHandler}
                clickedPrev = {prevPageHandler}
                disabledNext = {charactersData.nextUrl ? false : true}
                disabledPrev = {charactersData.prevUrl ? false : true}
                currentPage = {charactersData.currentPage}
                totalPages = {charactersData.totalPages}/>
            <ul className={classes.list}>
                {loading ? <Spinner /> : characters }
            </ul>
        </div>
    )
}

export default React.memo(Characters);