
    const youtubeKey = 'AIzaSyC1Dz3mDyUn7ftZ7Gaj36ILi_IzkR1jnEY';
    const youtubeUser = 'UCAW-NpUFkMyCNrvRSSGIvDQ';

    // Divs
    const subs = document.getElementById('subs');
    const name = document.getElementById('name');
    const views = document.getElementById('views');


        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            // subs.innerHTML = data["items"][0].statistics.subscriberCount;
            // name.innerHTML = data["items][0].statistics.title;
            // views.innerHTML = data["items][0].statistics.title;

        })



let updatestats = () => {
subs.innerHTML = 'i'
}
    setInterval(() => {
        updatestats();
    }, 1000);