import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { countries } from "../../api";
import { FormControl, NativeSelect, StylesProvider } from "@material-ui/core";
import styles from "./Country.module.css";

const Country = ({ handler }) => {
  const [fetchcountries, setfetchcountries] = useState([]);
  useEffect(() => {
    const coun = async () => {
      setfetchcountries(await countries());
      // console.log(fetchcountries);
    };
    coun();
  }, [setfetchcountries]);
  return (
    <FormControl className={styles.form}>
      <NativeSelect defaultValue="" onChange={(e) => handler(e.target.value)}>
        <option value="">Global</option>
        {fetchcountries.map((ca) => (
          <option value={ca}>{ca}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default Country;
