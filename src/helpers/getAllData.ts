export const getAllData = (setData: Function, setFinalData: Function) => {
    fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setFinalData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
};
