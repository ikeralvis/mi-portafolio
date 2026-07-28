import LanguageSwitch from './LanguageSwitch';
import ThemeToggle from './ThemeToggle';

export default function NavControls() {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
      <LanguageSwitch />
      <ThemeToggle />
    </div>
  );
}
