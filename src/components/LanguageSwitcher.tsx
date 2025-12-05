import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, languageNames } from '../utils/translations';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
        <Globe className="size-4" />
        <span className="hidden sm:inline">{languageNames[language]}</span>
      </button>
      
      <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border-2 border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`w-full px-4 py-2 text-left hover:bg-slate-100 transition-colors ${
              language === lang ? 'bg-[#e94560]/10 text-[#e94560]' : 'text-slate-700'
            }`}
          >
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
