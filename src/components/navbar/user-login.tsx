import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CiUser } from "react-icons/ci"
import { Button } from "../ui/button"
import LoginForm from "../login-form"


export default function UserLogin({ resources, children }: { resources: any, children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <LoginForm />
            </DialogContent>
        </Dialog>
    )
};
