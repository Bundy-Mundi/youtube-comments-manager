import React from "react";
import LayoutDefault from "../components/layouts/Layout.Default";

function Home () {
    return(
        <LayoutDefault>
            <section className="h-screen w-full">Section 1</section>
            <section className="h-screen w-full">Section 2</section>
            <section className="h-screen w-full">Section 3</section>
            <section className="h-screen w-full">Section 4</section>
        </LayoutDefault>
    )
};

export default Home;