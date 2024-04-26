import {
  Banner,
  Earn,
  Footer,
  Header,
  Introduction,
  KeyFeatures,
  RoleAndContact,
  Spacer,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Spacer className="h-[60px]" />
      <Banner />
      <Spacer />
      <KeyFeatures />
      <Spacer className="h-[350px]" />
      <Introduction />
      <Spacer className="h-[350px]" />
      <div className="flex flex-col items-center justify-between overflow-x-hidden bg-gradient-to-t from-[#FFA6C6] via-[#261E21] via-90%">
        <Earn />
        <Spacer className="h-[300px]" />
        {/* <Spacer className="h-[300px]" /> */}
        <RoleAndContact />
        <Spacer />
        <Footer />
      </div>
    </main>
  );
}
