import {GlobalToastConfiguration} from "./globalConfiguration";
import { toast } from "react-toastify";

export const SuccesMessage = (message:string): void =>{
    toast.success(message, GlobalToastConfiguration)
}