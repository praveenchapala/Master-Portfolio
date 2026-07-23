import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div
          className="
            grid
            lg:grid-cols-3
            gap-16
            mb-16
          "
        >
          <FooterBrand />

          <FooterLinks />

          <FooterSocials />
        </div>

        <FooterBottom />

      </div>
    </footer>
  );
}

export default Footer;