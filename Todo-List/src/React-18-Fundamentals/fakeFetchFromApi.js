// this function have job of fake fetching data from api

const fakeFetch = () => {
    let allHouses = [];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            allHouses = [
                { id: crypto.randomUUID(), address: "Mitra Sucura, Vogosca", country: "BiH", price: 300000 },
                { id: crypto.randomUUID(), address: "Osjek bb, Ilidza", country: "BiH", price: 420000 },
                { id: crypto.randomUUID(), address: "Poljine, Sarajevo", country: "BiH", price: 690000 },
                { id: crypto.randomUUID(), address: "Doglodi 46, Ilidza", country: "BiH", price: 150000 }
            ]
            resolve(allHouses);
        }, 1000);
    })
}

export default fakeFetch;