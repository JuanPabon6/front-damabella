import {GlobalToastConfiguration} from "./globalConfiguration";
import { toast } from "react-toastify";

export const InfoMessage = (message:string): void =>{
    toast.info(message, GlobalToastConfiguration)
}