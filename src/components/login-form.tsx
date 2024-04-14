'use client'
import { FormEventHandler, useState } from "react";
import { PatternFormat } from 'react-number-format';
import { VscDebugRestart } from "react-icons/vsc";
import { HiExclamationCircle } from "react-icons/hi";
import { Button } from "./ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { GoArrowLeft } from "react-icons/go";

import { toast } from "sonner"

const expireCodeTime = 60 // in seconds

export default function LoginForm() {
    const [phone, setPhone] = useState()
    const [getCode, setGetCode] = useState(false)
    const [codeSent, setCodeSent] = useState(false)
    const [codeExpire, setCodeExpire] = useState(expireCodeTime)

    const startTimer = () => {
        const expireInterval = setInterval(() => {
            setCodeExpire((val) => {
                if (val === 0) {
                    clearInterval(expireInterval)
                    setCodeSent(false)
                    return expireCodeTime
                }
                else {
                    return val -= 1
                }
            })
        }, 1000)
    }

    const onSubmit: FormEventHandler = async (e) => {
        e.preventDefault()

        if (codeExpire !== expireCodeTime) {
            toast(
                <div className="flex items-center gap-x-2 text-sm">
                    <HiExclamationCircle className="text-2xl text-zinc-400" />
                    Kodni yana {codeExpire} sonyadan so&apos;ng so&apos;rashingiz mumkin
                </div>
            )
        }
        else {
            setCodeSent(true)
            setGetCode(true)

            startTimer()
        }
    }

    const onBackward = () => {
        setGetCode(false)
        setCodeSent(false)
    }

    const resendCode = () => {
        setCodeSent(true)
        setCodeExpire(expireCodeTime)

        startTimer()
    }

    return (
        <div className="p-4 py-6 relative">
            {
                getCode ? (
                    <div>
                        <button onClick={onBackward} className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-300 absolute -top-3 left-0">
                            <GoArrowLeft />
                        </button>
                        <h2 className="text-2xl font-medium mb-3">
                            Kodni kiriting
                        </h2>
                        <p className="mb-14">
                            Telefonni tasdiqlash uchun <strong>+998 93 189-73-18</strong> raqamiga 5 xonali kod yuborildi
                        </p>

                        <div className="flex items-center justify-center mb-16">
                            <InputOTP onChange={(val) => console.log(val)} maxLength={5} >
                                <InputOTPGroup className="scale-125">
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>

                        {
                            codeSent ? (
                                <p>
                                    Agar kod kelmasa, siz {codeExpire} soniya orqali yangisini olishingiz mumkin
                                </p>
                            ) : (
                                <Button onClick={resendCode} size={'lg'} variant={'ghost'} asChild className="w-full cursor-pointer text-base">
                                    <div className="flex items-center gap-x-2">
                                        <VscDebugRestart />
                                        Kodni qayta yuborish
                                    </div>
                                </Button>
                            )
                        }
                    </div >
                ) : (
                    <div>
                        <h2 className="text-2xl font-medium mb-3">
                            Telefon raqamingizni kiriting
                        </h2>
                        <p className="mb-8">
                            Tasdiqlash kodini SMS orqali yuboramiz
                        </p>

                        <form onSubmit={onSubmit}>
                            <PatternFormat
                                value={phone}
                                type="tel"
                                format="+998 ## ### ##-##"
                                mask="_"
                                onValueChange={(value: any) => setPhone(value.value)}
                                required
                                className='w-full px-3 py-2 mb-8 rounded-md border outline-none text-xl focus-visible:ring-1 focus-visible:ring-zinc-900 focus-visible:dark:ring-zinc-300'
                                name='phone-login'
                                id='phone-login'
                                placeholder="+998"
                            />
                            <Button type="submit" className="w-full mb-16" size={'lg'}>
                                Kodni olish
                            </Button>
                        </form>

                        <p className="text-sm text-center">
                            Avtotizatsiyadan otish orqali siz <a href="/privacy-policy" className="text-indigo-500">
                                shaxsiy ma&apos;lumotlarni qayta ishlash siyosatiga rozilik bildirasiz
                            </a>
                        </p>
                    </div >
                )
            }
        </div >
    )
};
