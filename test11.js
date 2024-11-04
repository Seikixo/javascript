function fetchData1(){
    return new Promise ((resolve) => {
        setTimeout(() => resolve("Data from Api 1"), 2000);
    });
}

function fetchData2(){
    return new Promise ((resolve) => {
        setTimeout(() => resolve("Data from Api 2"), 1000);
    });
}

async function fetchSequential() {
    try {
        const data1 = await fetchData1();  
        const data2 = await fetchData2();

        return [data1, data2];
    } catch (error) {
        console.error("Error fetching data", error);
        return null;
    }
}

fetchSequential().then((data) => console.log(data));