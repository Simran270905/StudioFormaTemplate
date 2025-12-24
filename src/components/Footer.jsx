const Footer = () => {
  return (
    <footer className="font-playfair px-10 md:px-24 py-15 border-t border-black/10">
      <div className="flex flex-col md:flex-row justify-between gap-12">

        <div>
          <h3 className="text-lg font-light mb-3">
            Studio Forma
          </h3>
          <p className="text-sm text-[#6B6B6B] max-w-sm">
            A contemporary interior design studio creating
            calm, architectural and timeless spaces.
          </p>
        </div>

        <div className="text-sm text-[#6B6B6B] space-y-2">
          <p>hello@studioforma.com</p>
          <p>+91 90000 00000</p>
          <p>Mumbai · Pune · Bangalore</p>
        </div>
      </div>

      <div className="mt-14 text-xs text-[#6B6B6B] flex flex-col md:flex-row justify-between gap-4">
        <p>© StarX Innovation and IT Solution. All rights reserved.</p>
        <p>Instagram · Behance · LinkedIn</p>
      </div>
    </footer>
  );
};

export default Footer;
