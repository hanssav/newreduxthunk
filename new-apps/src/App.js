import React from 'react';
import { AddKontak } from './components';
import ListKontak from './components/ListKontak';

function App() {
    return (
        <div style={{ padding: '30px' }}>
            <h1>Simple Kontak Apss</h1>
            <AddKontak />
            <hr />
            <ListKontak />
        </div>
    );
}

export default App;
