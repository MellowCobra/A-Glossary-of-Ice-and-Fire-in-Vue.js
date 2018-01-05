import Vue from 'vue'

function SET_BOOKS(state, books) {
    state.books = books
}

function SET_CHARACTERS(state, characters) {
    state.characters = characters
}

function SET_HOUSES(state, houses) {
    state.houses = houses
}

export default {
    SET_BOOKS,
    SET_CHARACTERS,
    SET_HOUSES
}