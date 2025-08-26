import A from './A/A';
import B from './B/B';
import C from './C/C';

import './main.css'

function main() {
    return (
        <div className='container'>
            <A />
            <B style={{ display: 'sticky', innerHeight: "100%" }} /><br />
            <C />
        </div>
    )
};

export default main;
