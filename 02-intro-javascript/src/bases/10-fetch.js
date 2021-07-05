const apikey = "nHrb6A9qBiL6nbCLSqKmei6tL1fe0Gaf";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
peticion
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    console.log(url);
  })
  .catch((err) => console.log(err));
