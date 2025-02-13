export const getAllData = (setData: Function) => {
    fetch("/data.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
};
