import axios from 'axios';

export const consultAPI = async (url, setData, denominacion) => {
  try {
    const response = await axios.get(url);

    console.log('denominacionAÍ', denominacion);
    console.log('denominacionLength', denominacion.length);
    if (denominacion.length < 3) {
      setData(response.data.results);
    } else {
      setData(response.data);
    }
  } catch (err) {
    console.log('error', err);
  }
};
