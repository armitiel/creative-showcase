import brandingMouse from '@/assets/branding-mouse.jpg';

export const BrandingBanner = () => {
  return (
    <div className="w-full flex justify-center overflow-hidden bg-[#1a1a2e]">
      <img
        src={brandingMouse}
        alt="Branded mouse with logo"
        className="w-full max-w-[500px] md:max-w-[600px] aspect-square object-cover"
        loading="lazy"
      />
    </div>
  );
};
