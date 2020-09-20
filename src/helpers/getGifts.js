export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OWI1tekxv6XRlkMV01cn4rm9HgQ0H0us`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifts = data.map( img =>{             
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifts
}