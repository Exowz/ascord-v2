import React from 'react'
import AscordLightMode from '@/components/ui/logo-lightmode'
import { ModeToggle } from '@/components/mode-toogle'

export default function Footer() {
  return (
    <footer className="py-5 border-t border-slate-300 dark:border-white/15">
        <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex gap-2 items-center lg:flex-1">
                <AscordLightMode className="h-10 w-10" />
                <div className="font-medium">Ascord</div>
            </div>
                <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
                    <a className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white text-xs md:text-sm transition" href="#">Features</a>
                    <a className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white text-xs md:text-sm transition" href="#">Testimonials</a>
                    <a className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white text-xs md:text-sm transition" href="#">Changelog</a>
                </nav>
            <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <ModeToggle />
            </div>
            </div>
        </div>
    </footer>
  )
}
