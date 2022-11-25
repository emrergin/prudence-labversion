import { store } from "../store.js";

function updateData() {
  const someData = {
    title: "kisi verileri",
    kisiVerisi: store.veriler,
    odeme: store.kazanc,
    isim: store.isim,
    _id: store._id,
    demografi: store.demografi,
    gps: store.gps
  };
  const putMethod = {
    method: "PUT",
    headers: {
      "Content-type": "application/json  ; charset=UTF-8",
    },
    body: JSON.stringify(someData),
  };
  fetch(
    `http://116.203.66.71/prudence/api/kisiveri`,
    putMethod
  ).catch((err) => console.log(err));
  // console.log(someData);
}

export default updateData;
