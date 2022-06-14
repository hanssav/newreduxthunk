import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak, deleteKontak } from '../../actions/kontakAction';
// import kontak from '../../reducers/kontak';

export default function ListKontak() {
    // state KontakReducer from reducer/kontak/
    const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer);
    const dispatch = useDispatch();

    useEffect(() => {

        // panggil action get list kontak
        // console.log("1. use effect component did mount")
        dispatch(getListKontak())

    }, [dispatch])

    useEffect(() => {
        if (deleteKontakResult) {
            console.log("5. masuk component didUpdate");
            dispatch(getListKontak());
        }
    }, [deleteKontakResult, dispatch])

    return (
        <div>
            <h3>List Kontak</h3>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    // console.log("kontak", kontak)
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} -  {kontak.nohp} - <button onClick={() => dispatch(deleteKontak(kontak.id))}>hapus</button>
                        </p>
                    )
                })
            ) : getListKontakLoading ? (
                <p>Loading...</p>
            ) : (
                <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
            )}
        </div >
    )
}
