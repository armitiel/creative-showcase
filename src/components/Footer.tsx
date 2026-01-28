export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Jan Kowalski. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-muted-foreground text-sm">
            Zaprojektowane z <span className="text-primary">♥</span> w Polsce
          </p>
        </div>
      </div>
    </footer>
  );
};
