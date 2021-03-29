

describe("check is soft drink", () =>{
    let listOfSoftDrink = []
        beforeEach(() => {
            // TODO:
            listOfSoftDrink = [{name:'coke', price:18}, {name:'fanta', price:12}, {name:'pepsi', price:20}, {name:'mojito', price: 17}];
        });

//    TODO: price not over $30
//    TODO: member of group

    test("price of soft drink", () => {
        for (let i = 0; i <listOfSoftDrink.length ; i++) {
            expect(listOfSoftDrink[i].price).toBeLessThan(30)
        }
    })


    test("member of group", () => {
        for (let i = 0; i <listOfSoftDrink.length ; i++) {
            let listName = listOfSoftDrink.map((v)=>v.name)
            const name = 'mojito'
            expect(listName).toContain(name);
        }
    })
})