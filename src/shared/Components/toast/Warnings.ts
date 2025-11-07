import { GlobalToastConfiguration } from "./globalConfiguration";
import { toast } from "react-toastify";

export const WarningMessage = (message:string): void => {
    toast.warning(message, GlobalToastConfiguration )
}