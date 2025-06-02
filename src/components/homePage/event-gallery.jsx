import React from "react";
import HeadPage from "./HeadPage";
import Image from "next/image";

const Data = [
  {
    pic: "/img/gallery/img-1.jpg",
  },
  {
    pic: "/img/gallery/img-2.jpg",
  },
  {
    pic: "/img/gallery/img-3.jpg",
  },
  {
    pic: "/img/gallery/img-4.jpg",
  },
  {
    pic: "/img/gallery/img-5.jpg",
  },
  {
    pic: "/img/gallery/img-6.jpg",
  },
];

const EventGallery = () => {
  return (
    <section
      className="py-12 px-4 max-w-6xl mx-auto
   
    ">
      <HeadPage
        content="our event gallery"
        second="Global Grand Event on Digital Design"
      />
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 ">
        {Data.map((item, index) => (
          <EventGalleryBox
            key={index}
            pic={item.pic}
            description={item.description}
            num={item.num}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="mt-8 px-4 py-2 bg-[#ea1e63] text-white rounded-md transition-colors 
            cursor-pointer
        ">
          View All Photos
        </button>
      </div>
    </section>
  );
};

const EventGalleryBox = ({ pic }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative group cursor-pointer" onClick={handleOpenModal}>
        <Image
          src={pic}
          alt="image"
          className="w-full h-48 object-cover 
          mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
          width={500}
          height={300}
        />
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full
               bg-black/80
               transition-all duration-200 ease-in-out
               flex justify-center items-center
               animation-ease-in-out
               z-50
               backdrop-blur-sm"
          onClick={handleCloseModal}>
          <div className="relative">
            <Image
              src={pic}
              alt="image"
              className="max-w-full max-h-full
              w-[80%] h-[80%]
              m-auto
              "
              width={800}
              height={600}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventGallery;
