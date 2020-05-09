import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let curl = url;
  if (country) {
    curl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(curl);
    //const moddata={confirmed,recovered,deaths,lastupdate}
    //return moddata;    OR
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};
export const fetchdailydata = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const md = data.map((da) => ({
      confirmed: da.confirmed.total,
      deaths: da.deaths.total,
      date: da.reportDate,
    }));
    return md;
  } catch (error) {}
};
export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const md = countries.map((ca) => ca.name);
    return md;
  } catch (error) {}
};
