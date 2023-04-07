import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function createNote(newNoteData) {
    return sendRequest(`${BASE_URL}`, 'POST', newNoteData);

}
export function editNote(editNoteData, noteId) {
    return sendRequest(`${BASE_URL}/edit`, 'POST', editNoteData);

}

export async function getNotes(user) {
    console.log("GET NOTES IS RUNNING, USER:", user)
    const res = await sendRequest(`${BASE_URL}/show`, 'POST', user)
    console.log('responzzz', res)
    return res
}

export async function deleteNote(note) {
    const res = await sendRequest(`${BASE_URL}/delete`, 'POST', note);
    console.log("HEREEEEEEEEEE",res)
    return res
}