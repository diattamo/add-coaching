"use client";

import {setUserLocale} from "@/lib/locale";
import {locales} from "@/i18n/config";
import {useState} from "react";

const LocaleSwitcher = ({initialLocale}) => {
    const [currentLocale, setLocale] = useState(initialLocale)
    const flags = {
        en: '🇬🇧',
        fr: '🇫🇷',
    };

    const targetLocale = locales.find((lng) => lng !== currentLocale);

    const handleLocaleChange = async () => {
        await setUserLocale(targetLocale);
        setLocale(targetLocale);
    };

    return (
        <button
            onClick={handleLocaleChange}
            className="absolute top-0 right-4 p-0 border-none bg-transparent hover:bg-transparent focus:outline-none cursor-pointer"
            aria-label={`Switch to ${targetLocale}`}
        >
          <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>
            {flags[targetLocale]}
          </span>
        </button>
    );
};

export default LocaleSwitcher;
