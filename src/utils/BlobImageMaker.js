export const BlobImageMaker = (url, fileName) => {
  fetch(url)
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      const file = new File([blob], `${fileName}.png`, { type: blob.type });
      return file;
    })
    .catch((err) => {
      console.log("Error in BlobImageMaker Function, Error is : ", err);
    });
};
