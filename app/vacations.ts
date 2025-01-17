
//use the ():String to know if something is wrong when returning
export function vacation_location(location: String): String {

    //MAKE SURE USING THE ONE BEFORE "1" FOR THE STRING
    return `You are going to: ${location}`;
}

//arrow function
export const vacation_price = (price: number, location: string): string => {
    if (location === "Paris") {
        return ` the price of the vacation is: ${price+100}`;
    }

    return ` the price of the vacataion is ${price}`;
}