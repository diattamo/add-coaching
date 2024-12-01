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
    console.log(currentLocale);
    console.log(locales);
    console.log(targetLocale);

    const handleLocaleChange = async () => {
        // Set the new locale
        await setUserLocale(targetLocale);
        setLocale(targetLocale);
        console.log(targetLocale);
    };

    return (
        <button onClick={handleLocaleChange} aria-label={`Switch to ${targetLocale}`}>
      <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>
        {flags[targetLocale]}
      </span>
        </button>
    );
};

export default LocaleSwitcher;
