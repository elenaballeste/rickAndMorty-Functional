class CharacterItem {
    characters: {name: string, image: string, id: number}[];
    nextUrl: string;
    prevUrl: string;
    currentPage: string;
    totalPages: number;

    constructor(characters: {name: string, image: string, id: number}[], nextUrl: string, prevUrl: string, currentPage: string, totalPages: number) {
        this.characters = characters;
        this.nextUrl = nextUrl;
        this.prevUrl = prevUrl;
        this.currentPage = currentPage;
        this.totalPages = totalPages;
    }
}

export default CharacterItem;