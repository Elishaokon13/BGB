import Claim from "@/components/Claim";

const ClaimPage = () => {
  return (
    <div style={{
      backgroundImage: "url('/images/about-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }} className="text-white">
      <Claim />
    </div>
  );
};

export default ClaimPage;
