import fetch from 'node-fetch';
interface createPosition{
  asset: string;
  quantity: number;
  buy_price: number;
  actual_price: number;
  date_buy: number;

}

const requiredKeys: (keyof createPosition)[] = [
    "asset",
    "quantity",
    "buy_price",
    "actual_price",
    "date_buy",
  ];

test("testndo se o servidor ta rodando", async () => {
  const response = await fetch("http://localhost:3000/teste");
  expect(response.status).toBe(200);
});

test("create position", async () =>{
  const body: createPosition={
    asset: 'eth',
    buy_price: 1,
    quantity: 1,
    actual_price: 1,
    date_buy: 21
  }
  const response = await fetch("http://localhost:3000/create", 
  {
    method: 'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(body)
  })
  console.log(response);
  
  expect(response.status).toBe(200);
})