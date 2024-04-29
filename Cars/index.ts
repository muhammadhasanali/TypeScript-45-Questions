function cars(make: string, model: string, others: [string, string | number][]) {
    const CarDetail = { make, model, ...Object.fromEntries(others) };
    return CarDetail;
}

const mycar = cars("Toyota", "Corolla", [['Color', 'Silver'], ["Year", 2016]]);
console.log(mycar);