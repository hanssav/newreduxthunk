import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK"

export const getListKontak = () => {
    // console.log("2. Masuk Action")

    return (dispatch) => {
        //loading  
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        // get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000
        })
            .then((response) => {
                // berhasil get api
                // console.log("3. berhasil dapet data: ", response);
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    }
                })

            })
            .catch((error) => {
                // gagal get api
                // console.log("3. jika eror, pesannya ", error);
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
}

export const addKontak = (data) => {
    console.log("2. Masuk Action")

    return (dispatch) => {
        //loading  
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        // get API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                // berhasil get api
                console.log("3. berhasil dapet data: ", response);
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    }
                })

            })
            .catch((error) => {
                // gagal get api
                console.log("3. jika eror, pesannya ", error);
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
}

export const deleteKontak = (id) => {
    console.log("2. Masuk Action")

    return (dispatch) => {
        //loading  
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        // get API
        axios({
            method: 'DELETE',
            url: 'http://localhost:3000/kontaks/' + id,
            timeout: 120000,
        })
            .then((response) => {
                // berhasil get api
                console.log("3. berhasil dapet data: ", response);
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    }
                })

            })
            .catch((error) => {
                // gagal get api
                console.log("3. jika eror, pesannya ", error);
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
}