import { AppDataSource } from "./data-source"
import { Position } from "./entity/Position"
import { createPosition } from "./typos"

const positionData: createPosition = {
    asset: "GOOG",
    quantity: 100,
    buy_price: 125.50,
    actual_price: 130.25,
    date_buy: 22,
  };

export async function registry_dto(position_dto:createPosition) {
    AppDataSource.initialize().then(async () => {

        console.log("Inserting a new position into the database...")
    const position = new Position();
    position.asset = position_dto.asset;
    position.quantity = position_dto.quantity;
    position.buy_price = position_dto.buy_price;
    position.actual_price = position_dto.actual_price;
    
    await AppDataSource.manager.save(position);
    console.log("Saved a new position with id: " + position.id);
    return position;
}).catch(error => console.log(error))

}
registry_dto(positionData)