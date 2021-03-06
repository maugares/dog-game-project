import { RANDOM_BREEDS, RIGHT_ANSWER, WRONG_ANSWER} from './types'

export const randomBreeds = (breeds) => {
    return {
        type: RANDOM_BREEDS,
        payload: breeds
    }
}

export const rightAnswer = () => {
    return {
        type: RIGHT_ANSWER,
        payload: alert('CORRECTO'),
    }
}

export const wrongAnswer = (rightOne) => {
    return {
        type: WRONG_ANSWER,
        payload: alert(`NOT CORRECTO, should be ${rightOne.toUpperCase()}`),

    }
}