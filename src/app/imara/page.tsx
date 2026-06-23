import ImHeader from "@/components/imara/ImHeader";
import ImHero from "@/components/imara/ImHero";
import ImUniversPicker from "@/components/imara/ImUniversPicker";
import ImSoins from "@/components/imara/ImSoins";
import ImFormations from "@/components/imara/ImFormations";
import ImArguments from "@/components/imara/ImArguments";
import ImTestimonials from "@/components/imara/ImTestimonials";
import ImCtaFinal from "@/components/imara/ImCtaFinal";
import ImFooter from "@/components/imara/ImFooter";
import ImFloating from "@/components/imara/ImFloating";

export default function ImaraHomePage() {
  return (
    <>
      <ImHeader />
      <main>
        <ImHero />
        <ImUniversPicker />
        <ImSoins />
        <ImFormations />
        <ImArguments />
        <ImTestimonials />
        <ImCtaFinal />
        <ImFooter />
      </main>
      <ImFloating />
    </>
  );
}
