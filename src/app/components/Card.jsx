import Link from "next/link";
import React from "react";

const Card = () => {
  return (
   <Link href="/{id}" className="px-3 py-3">
     <div className="bg-white rounded shadow max-w-md mx-auto">
      <header className="p-4">
        <img
          src="https://deadsea.com/wp-content/uploads/2019/02/MOST-BUTIFUL-NATURAL-PLACES--1024x771.jpg"
          className="float-left rounded-full w-10 h-10 m-1 mr-3"
        />
        <h3 className="text-lg font-bold">Island Holiday Escape</h3>
        <p className="text-sm text-gray-600">
          5 nights (inc flights) from $1999
        </p>
      </header>
      <section>
        <img
          src="https://i0.wp.com/traveltoyournature.com/wp-content/uploads/2023/07/beautiful-nature-destinations-south-india.jpg?resize=600%2C800"
          className="w-full"
        />
        <p className="text-sm text-gray-600 p-4">
          Omnis consectetur voluptatem labore aut et vel itaque recusandae. Et
          molestiae iure qui et nihil minus nes ciunt.
        </p>
      </section>
      <footer className="p-4">
        <a
          href="#"
          className="uppercase font-bold text-sm text-blue-700 hover:underline mr-3"
        >
          Book Online
        </a>
        <a
          href="#"
          className="uppercase font-bold text-sm text-blue-700 hover:underline"
        >
          More Info
        </a>
        <a href="#" className="float-right">
          <img src="https://img.icons8.com/flat_round/24/000000/share--v1.png" />
        </a>
        <a href="#" className="float-right mr-3">
          <img src="https://img.icons8.com/flat_round/24/000000/hearts.png" />
        </a>
      </footer>
    </div>
   </Link>
  );
};

export default Card;
