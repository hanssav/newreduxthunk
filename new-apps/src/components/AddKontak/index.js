import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak } from '../../actions/kontakAction';

export default function AddKontak() {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");

    const { addKontakResult } = useSelector((state) => state.KontakReducer);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("1. Masuk handle Subnit");

        dispatch(addKontak({ nama: nama, nohp: nohp }))
    }

    useEffect(() => {
        if (addKontakResult) {
            console.log("5. masuk component didUpdate");
            dispatch(getListKontak());
            setNama('')
            setNohp('')
        }
    }, [addKontakResult, dispatch])

    return (
        <div>
            <h4>Add Kontak</h4>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name="nama" placeholder="nama . . ." value={nama} onChange={(event) => setNama(event.target.value)} />
                <input type="text" name="nohp" placeholder="no hp . . ." value={nohp} onChange={(event) => setNohp(event.target.value)} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
