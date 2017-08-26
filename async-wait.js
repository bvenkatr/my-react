// const fetchSomething = () => new Promise((resolve) => {
//     setTimeout(() => resolve('future value'), 500);
// });
//
// async function asyncFunction() {
//     const result = await fetchSomething(); // returns promise
//
//
//     // waits for promise and uses promise result
//     return result + ' 2';
// }
//
// asyncFunction().then(result => console.log(result));


(async () => {
    const placeholders = Array.apply(null, Array(5))
    const proms = placeholders.map((placeholder, i) =>
        new Promise(res =>
            setTimeout(res.bind(null, `prom ${i}`)), 1000 * i)
    )
    )

const acc = {};

for (const prom of proms) {
    const data = await prom
    acc[data] = data
}
})()
