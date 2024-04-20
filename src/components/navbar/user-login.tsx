import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CiUser } from "react-icons/ci"
import { Button } from "../ui/button"
import LoginForm from "../login-form"


export default function UserLogin({ resources }: { resources: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'} className="p-1.5 cursor-pointer" asChild>
                    <div className="flex items-center gap-x-2">
                        <CiUser className="text-lg" />
                        <span className="text-sm hidden lg:block">
                            {true ? resources.navbar.login : resources.navbar.profile}
                        </span>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <LoginForm />
            </DialogContent>
        </Dialog>
    )
};
