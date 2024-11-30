import React from 'react'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Ewan Kapoor",
          designation: "CEO at Ascord",
          src:"https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/354538909_3474630409532383_3303849962310665471_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PmS3VLvN35QQ7kNvgGsQyEL&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AXWjUi4OvSDv6hVTRDBf4rI&oh=00_AYB490Q7U61krRKz5-PRdMfVPBAzP8pPlnqwZQetUwzmtQ&oe=67510C05",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Teddy Rakotomalala",
          designation: "CTO at Malgachie",
          src:"https://media.licdn.com/dms/image/v2/D4E03AQGzQdfqbkSrrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731795817191?e=1738195200&v=beta&t=p9OPuuONk4V7NKA4xy5j-OlAuCFZgblJWWKq5xzOwkA",
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Erwan Minguillon Le Page",
          designation: "Cybersecurity Expert at CloudScale",
          src:"https://media.licdn.com/dms/image/v2/D4E03AQFrhOm-RoqXbQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708514759151?e=1738195200&v=beta&t=vOUdc2HEVwiDOt5zfrF00N2VezuR46lVUr8rF7NQZgQ",
        },
        {
            quote:
            "Even in the afterlife, I still use Ascord to manage my projects. It's the best tool I've used",
            name: "Steve Jobs",
            designation: "Founder at Apple",
            src: "https://cdn.prod.website-files.com/61a89f98d10b6b13177266bc/645cabe62ad9dd3218f3a51d_Blog%20-%20main%20image(1000%C2%A0×%C2%A0578%C2%A0px)%20Steve%20Jobs%20(1).png",
        },
        {
            quote:
            "I've tried many project management tools, but none have impressed me as much as Ascord. I may buy the whole company actually.",
            name: "Elon Musk",
            designation: "Founder at SpaceX",
            src:"https://business-cool.com/wp-content/uploads/2023/01/Elon_Musk_Royal_Society-e1681813122429-1296x700.jpg",
        },
      ];
      return (
        <section id="testimonials" className="py-12">
            <div className="max-w-7xl relative mx-auto py-16 md:py-40 px-4 w-full  left-0 top-0">
                <h2 className="text-2xl md:text-7xl font-bold dark:text-white">Who is Ascord for?</h2>
                <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Ascord is for creators, teams, and individuals who value productivity
          and focus. Whether you’re managing multiple projects, collaborating
          with a team, or simply keeping track of personal tasks, Ascord helps
          you stay organized in a simple, engaging way.
        </p>
            </div>
            <AnimatedTestimonials testimonials={testimonials} />
        </section>
    );
    }