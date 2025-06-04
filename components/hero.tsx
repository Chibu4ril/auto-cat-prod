import AutoLogo from "./logo-comp";
import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="font-bold lg:text-7xl text-center leading-relaxed">
        Your Product Catalog <br /> Automation System
      </h1>
      <p>Powered By</p>
      <div className="flex gap-8 justify-center items-center">
        <SupabaseLogo />
        <span className="border-l rotate-45 h-6" />
        <NextLogo />
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
