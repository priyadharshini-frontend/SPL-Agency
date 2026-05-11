    "use client";

    import { useEffect } from "react";
    import AOS from "aos";

    export default function AOSInit() {
    useEffect(() => {
        AOS.init({
        duration: 800,
        once: true, // animation only once
        offset: 100,
        easing: "ease-in-out",
        });
    }, []);

    return null;
    }