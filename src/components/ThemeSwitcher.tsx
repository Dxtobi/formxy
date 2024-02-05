"use client"


import { SunIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {  MoonIcon } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";


function ThemeSwitcher() {

    const  { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted) return null
    return (
        <Tabs defaultValue={theme}>
            <TabsList className="flex gap-2 items-center border p-1 rounded-md">
                <TabsTrigger value="light" onClick={() => setTheme('light')}>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] " />
                </TabsTrigger>
                <TabsTrigger value="light" onClick={() => setTheme('dark')}>
                    <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
                </TabsTrigger>
            </TabsList>

        </Tabs>
    )
}

export default ThemeSwitcher