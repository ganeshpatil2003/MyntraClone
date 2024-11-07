import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataActions } from "../store/fetchDataSlice";
import { itemsActions } from "../store/itemSlice";

const LoadData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchDataActions.startFetchData());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialData(items));
        dispatch(fetchDataActions.endFetchData());
      });
    return () => {
      controller.abort();
      console.log("aborted");
    };
  }, []);

  return <></>;
};

export default LoadData;
