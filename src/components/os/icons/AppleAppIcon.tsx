interface AppleAppIconProps {
  gradient: string;
  children: React.ReactNode;
}

export function AppleAppIcon({ gradient, children }: AppleAppIconProps) {
  return (
    <div className={`apple-app-icon ${gradient}`}>
      <span className="apple-app-icon-shine" aria-hidden />
      <span className="apple-app-icon-glyph">{children}</span>
    </div>
  );
}
