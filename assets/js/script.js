
    const youtubeKey = 'AIzaSyC1Dz3mDyUn7ftZ7Gaj36ILi_IzkR1jnEY';
    const youtubeUser = 'UCB9cm2UuiaqCpXsAZ-5CnSA';

    // Divs
    const subs = document.getElementById('subs');
    const name = document.getElementById('name');
    const chnllogo = document.getElementById('chnllogo');
    //divs
    const views = document.getElementById('views');
    const delay = 10000; // 10 min

    let getSubscribers = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${youtubeUser}&key=${youtubeKey}`)
        // fetch('../../api.json')
        .then(response => {
            return response.json()
        })
        .then(data => {

            document.title = data["items"][0].snippet.title + " 's Channel Stats ";

            let logourl = data["items"][0].snippet.thumbnails.high.url;

            subs.innerHTML = data["items"][0].statistics.subscriberCount;
            views.innerHTML = data["items"][0].statistics.viewCount;
            name.innerHTML = data["items"][0].snippet.title;
            chnllogo.src = logourl;


        })

    }

    setInterval(() => {
        getSubscribers();
    }, delay);
