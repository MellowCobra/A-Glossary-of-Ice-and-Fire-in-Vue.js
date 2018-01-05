import Vue from 'vue'

function getBooks(ctx) {
    fetch('https://www.anapioficeandfire.com/api/books', { method: "GET" })
        .then( res => {
            return res.json()
        }).then( res => {
            ctx.commit('SET_BOOKS', res)

            return res
        }).catch( err => {
            console.error(err)

            return []
        })
}

function getCharacters(ctx) {
    fetch('https://www.anapioficeandfire.com/api/characters', { method: "GET" })
        .then( res => {
            return res.json()
        }).then( res => {
            ctx.commit('SET_CHARACTERS', res)

            return res
        }).catch( err => {
            console.error(err)

            return []
        })
}

function getHouses(ctx) {
    fetch('https://www.anapioficeandfire.com/api/houses', { method: "GET" })
        .then( res => {
            return res.json()
        }).then( res => {
            ctx.commit('SET_HOUSES', res)

            return res
        }).catch( err => {
            console.error(err)

            return []
        })
}

export default {
    getBooks,
    getCharacters,
    getHouses
}