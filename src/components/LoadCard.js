import useFetch from '../hooks/useFetch';

function LoadCard() {
    const url = 'https://random-data-api.com/api/users/random_user?size=10';
    useFetch(url, 'false').then(response => {
        updateScreen(response);
    });
}

function updateScreen(response) {
    console.log(response[0]);
    if (response[0].length === 0) {
        return (
            <div>
                <h1> LOADING... </h1>
            </div>
        );
    } else {
        return (
            <div>
                {response[0].map(cards => (
                    <h2 key={cards.id}> {cards.id}</h2>
                ))}
            </div>
        );
    }


}

export default LoadCard;