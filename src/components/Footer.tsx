const Footer = () => {
  return (
    <footer className="p-3 bg-[#2a2a27] text-[#F4F4D4] ">
      <div className="max-w-[1340px] mx-auto">
        <div className="w-full flex justify-center flex-col items-center">
          <h6>&copy; 54 Collective {new Date().getFullYear()}</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
