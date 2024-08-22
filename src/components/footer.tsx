import Link from "next/link";
// import Search from "@/app/Search/Page";

const Footer = () => {
  return (
    <section className="bg-[#041B15] text-white px-24 pt-10 ">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="lg:w-[12vw] leading-loose">
          The Psychiatric Genomics Africa Portal (PsychGen-Africa) is an
          initiative of the PGC-Africa working group.
        </div>
        <ul className="space-y-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Search">Search</Link>
          </li>
          <li>
            <Link href="/app/Search/Page">Analysis</Link>
          </li>
          <li>
            <Link href="/app/Search/Page">Login / Signup</Link>
          </li>
        </ul>
        <ul className="space-y-5">
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Accessibility</li>
          <li>Contact & Support</li>
        </ul>
      </div>
      <p className="text-center text-lg pb-5">
        © 2024 PsychGen-Africa. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
