export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7FyFGat9oJjnIQ3vVN9g6fFAUd95Wn4V&q=${category}&limit=10`;
  const respose = await fetch(url);
  const { data } = await respose.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
