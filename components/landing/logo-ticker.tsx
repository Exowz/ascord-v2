import React from 'react'
import appleLogo from "@/app/assets/logo-apple.png"
import eceLogo from "@/app/assets/logo-ece.png"
import googleLogo from "@/app/assets/logo-google.png"
import githubLogo from "@/app/assets/logo-github.png"

export default function LogoTicker() {
  return (
    <section className="py-20 md:py-24">
        <div className="container">
            <div className="flex items-center gap-5">
                <div className="flex-1 md:flex-none">
                <h2>
                    Trusted by top innovative teams
                </h2>
                </div>
                <div className="flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2)_20%,rgba(0,0,0,0.8)_80%,transparent)]">
                <div className="flex gap-14 animate-scroll">
                    {[appleLogo, eceLogo, googleLogo, githubLogo].map((logo) => (
                        <img src={logo.src} key={logo.src} className="h-6 w-auto" />
                    ))}
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
