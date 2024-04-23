import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TelegramIcon from "./assets/telegram-icon"
import PhoneIcon from "./assets/phone-icon"

export default function Contacts({ children, resources }: { children: React.ReactNode, resources: any }) {
  return (
    <div>

      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>{children}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="space-y-6">
              <DrawerTitle>{resources.contacts.title}</DrawerTitle>
              <DrawerDescription>{resources.contacts.desc}:</DrawerDescription>
            </DrawerHeader>
            <div className="p-6 py-8 space-y-4 flex flex-col">
              <a href="https://t.me/dilrozbek_rakhimov" className="p-2 flex items-center gap-x-4 hover:bg-zinc-200 hover:dark:bg-zinc-700 transition rounded-lg" target="_blank">
                <TelegramIcon />
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm">Telegram</p>
                  <span className="text-sm opacity-70">
                    @ArtVibe_Support_bot
                  </span>
                </div>
              </a>
              <a href="tel:+998931897318" className="p-2 flex items-center gap-x-4 hover:bg-zinc-200 hover:dark:bg-zinc-700 transition rounded-lg" target="_blank">
                <PhoneIcon />
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm">+998 (93) 189-73-18</p>
                  <span className="text-sm opacity-70">
                    {resources.contacts.freecall}
                  </span>
                </div>
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden md:block">
        <Dialog>
          <DialogTrigger>{children}</DialogTrigger>
          <DialogContent>
            <DialogHeader className="space-y-6">
              <DialogTitle>{resources.contacts.title}</DialogTitle>
              <DialogDescription>
                {resources.contacts.desc}:
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 py-8 space-y-4 flex flex-col">
              <a href="https://t.me/dilrozbek_rakhimov" className="p-2 flex items-center gap-x-4 hover:bg-zinc-200 hover:dark:bg-zinc-700 transition rounded-lg" target="_blank">
                <TelegramIcon />
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm">Telegram</p>
                  <span className="text-sm opacity-70">
                    @ArtVibe_Support_bot
                  </span>
                </div>
              </a>
              <a href="tel:+998931897318" className="p-2 flex items-center gap-x-4 hover:bg-zinc-200 hover:dark:bg-zinc-700 transition rounded-lg" target="_blank">
                <PhoneIcon />
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm">+998 (93) 189-73-18</p>
                  <span className="text-sm opacity-70">
                    {resources.contacts.freecall}
                  </span>
                </div>
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>

    </div>
  )
};
