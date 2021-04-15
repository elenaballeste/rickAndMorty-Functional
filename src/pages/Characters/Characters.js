import React, { Component } from 'react';
import axios from 'axios';
import Character from '../../components/Character/Character';
import Pager from '../../components/Pager/Pager';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Characters.module.scss';

class Characters extends Component {
    state = {
        characters: [],
        currentUrl: 'https://rickandmortyapi.com/api/character',
        nextUrl: null,
        prevUrl: null,
        isFirstPage: false,
        currentPage: null,
        totalPages: null,
        loading: false
    }

    componentDidMount () {
        if (localStorage.page && localStorage.page !== '1') {
            this.getCharacters(this.state.currentUrl + '?page=' + localStorage.page)
        } else {
            this.getCharacters(this.state.currentUrl)
        }
    }
    componentWillUnmount () {
        localStorage.setItem('page', this.state.currentPage)
    }

    getCharacters = (url) => {
        this.setState({ loading: true })
        axios.get(url)
            .then(response => {
                this.setState({
                    characters: response.data.results,
                    nextUrl : response.data.info.next,
                    prevUrl : response.data.info.prev,
                    currentPage: url.includes("page=") ? url.split("page=").pop() : '1',
                    totalPages: response.data.info.pages
                })
                // localStorage.setItem('page', this.state.currentPage)
                this.setState({ loading: false })
            })
            .catch(error => {
                console.log('We could not retireve the data:', error)
                this.setState({ loading: false })
            })

    }
    selectedCharacterHandler = (id) => {
        const selectedCharacter = this.state.characters.filter(item => item.id === id)[0]
        console.log(selectedCharacter)
        // Alternative option
        // axios.get('https://rickandmortyapi.com/api/character/' + id)
        //     .then(response => {console.log(response.data)})
        //     .catch(error => {console.log(error)})
    }
    nextPageHandler = () => {
        this.setState({ currentUrl: this.state.nextUrl })
        this.getCharacters(this.state.nextUrl)
    }
    prevPageHandler = () => {
        this.setState({ currentUrl: this.state.prevUrl })
        this.getCharacters(this.state.prevUrl)
    }

    render () {
        let characters = this.state.characters.map(character => {
            return <Character
                name={character.name}
                img={character.image}
                key={character.id}
                clickedItem={() => this.selectedCharacterHandler(character.id)}/>
        })
        if (this.state.loading) {
            characters = <Spinner />
        }

        return (
            <div>
                <Pager
                    clickedNext = {this.nextPageHandler}
                    clickedPrev = {this.prevPageHandler}
                    disabledNext = {this.state.nextUrl ? false : true}
                    disabledPrev = {this.state.prevUrl ? false : true}
                    currentPage = {this.state.currentPage}
                    totalPages = {this.state.totalPages}/>
                <ul className={classes.list}>
                    {characters}
                </ul>
            </div>
        );
    }
}

export default Characters;