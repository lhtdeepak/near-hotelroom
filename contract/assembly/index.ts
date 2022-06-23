import { Context, logging, PersistentMap, u128, ContractPromiseBatch } from "near-sdk-as";

const Memos = new PersistentMap<String,String[]>('memos');

export function addDetails(reciver:string,memo:string,hours:string,room:string,price:string, address:string, roomno:string):void{
    logging.log('adding memo');
    if (Memos.contains(Context.sender)){
        let senderMemos= Memos.getSome(Context.sender);
        senderMemos.push(`${reciver}, your ${room} room with room no. ${roomno}, price ${price} is alloted for ${hours}, Address:- ${address} ,` + memo);
Memos.set(Context.sender, senderMemos)
    } else {
        Memos.set(Context.sender, [`${reciver}, your ${room} room with room no. ${roomno}, price ${price} is alloted for ${hours}, Address:-${address} ,` + memo]) 
    }
}
export function ConfirmRoomNumber(account:string,roomnumber:u128):void{
    ContractPromiseBatch.create(account).transfer(roomnumber);
    logging.log("Room Booked for this ! "+ account)
}


export function getDetails(user:String):String[]{
    if(Memos.contains(user)){
        return Memos.getSome(user)
    }else{
        logging.log(' no room were found for this user')
        return[]
    }
}