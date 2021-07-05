const apikey = "nHrb6A9qBiL6nbCLSqKmei6tL1fe0Gaf";
const getimgPromesa = async () => {
  try {
    const res = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apikey}`
    );
    const { data } = await res.json();
    console.log(data);
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getimgPromesa();
