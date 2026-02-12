import brandingMouse from '@/assets/branding-mouse.png';

export const BrandingBanner = () => {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={brandingMouse}
        alt="Branded mouse with logo"
        className="w-full h-[300px] md:h-[400px] object-cover"
        loading="lazy"
      />
    </div>
  );
};
