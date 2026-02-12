import brandingMouse from '@/assets/branding-mouse.png';

export const BrandingBanner = () => {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={brandingMouse}
        alt="Branded mouse with logo"
        className="w-full h-[400px] md:h-[500px] object-cover object-[center_30%]"
        loading="lazy"
      />
    </div>
  );
};
