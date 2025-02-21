import react from 'react';


const Clock = () => {
    return (
        <div>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    )
}
export default Clock;
