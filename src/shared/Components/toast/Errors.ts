import { GlobalToastConfiguration} from "./globalConfiguration";
import { toast } from "react-toastify";

export const ErrorMessage =  (message:string): void => {
    toast.success(message, GlobalToastConfiguration)
}