import { store } from "../store.js";

function updateData() {
  const someData = {
    title: "kisi verileri",
    kisiVerisi: store.veriler,
    odeme: store.kazanc,
    isim: store.isim,
    _id: store._id,
    demografi: store.demografi,
    gps: store.gps,
    experiment: store.experiment,
  };
  console.log(someData.experiment);
  const putMethod = {
    method: "PUT",
    headers: {
      "Content-type": "application/json  ; charset=UTF-8",
    },
    body: JSON.stringify(someData),
  };
  fetch(
    `https://ekonomideneyleri.com.tr/prudence/api/kisiveri`,
    putMethod
  ).catch((err) => console.log(err));
}

export default updateData;
