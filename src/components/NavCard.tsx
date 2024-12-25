import { navCards } from "@/data/navCards";

const NavCard = () => {
  return (
    <div className="py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 ">
      {navCards.map((card) => (
        <article
          key={card.title}
          className="flex flex-col  gap-2 p-12 bg-[#F6F6E8] rounded-xl shadow"
        >
          <img src={card.icon} alt="Card image" className="w-20 h-auto" />
          <h5 className="text-2xl font-bold">{card.title}</h5>
          <p className="text-lg">{card.description}</p>
          <button className="border rounded-md mt-3 py-3 font-semibold border-[#64B500] text-[#64B500]">
            {card.buttonText}
          </button>
        </article>
      ))}
    </div>
  );
};

export default NavCard;
