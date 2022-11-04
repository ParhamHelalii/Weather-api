const getData = async () => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q={london}&appid={"61991205c86b7a50f12fb798691fb741"}`
  );
  const data = await response.json();
  console.log(data);
};
getData();
