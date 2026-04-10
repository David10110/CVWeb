type LanguageSwitcherProps = {
  lang: 'es' | 'en';
  cleanPath: string;
};

export default function LanguageSwitcher({
  lang,
  cleanPath,
}: LanguageSwitcherProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-4xl font-bold">
         <nav className="flex flex-row items-center gap-2">
      {lang === 'es' ? (
        <>
          <span className="text-2xl font-normal">ES</span>
          <span>|</span>
          <a href={`/en${cleanPath}`}>EN</a>
        </>
      ) : (
        <>
          <a href={cleanPath}>ES</a>
          <span>|</span>
          <span className="text-2xl font-normal">EN</span>
        </>
      )}
    </nav>
    </h1>
    </div>
  
   
  );
}

