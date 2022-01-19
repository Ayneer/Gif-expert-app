export const getGifs = async search => {
    const gifUrl = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = '01HioWp0PaWpYeT9jUhXCdlgrAluy639';
    const query = `${gifUrl}?api_key=${apiKey}&limit=10&q=${encodeURI(search)}`;

    const res = await fetch(query);
    const { data } = await res.json();
    
    return data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
}