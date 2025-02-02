"use client";

import {useTranslations} from "next-intl";
import { generateClient } from "aws-amplify/data";
import {Amplify} from "aws-amplify";
import outputs from "../../amplify_outputs.json";

export default function LetsConnect ({ locale }) {
    console.log("amplify configure");
    Amplify.configure(outputs);
    console.log("lets connect");
    const client = generateClient();
    const t = useTranslations();

    const handleKeepMePosted = async (event) => {
        event.preventDefault(); // Prevent default behavior if within a form
        const emailInput = document.querySelector("input[type='email']");
        if (emailInput) {
            console.log(emailInput.value);
        }
        try {
            await client.models.Email.create({
                content: emailInput.value,
                isDone: false
            });
        } catch (error) {
            console.error("Failed to write email", error);
        }
    }
    return (
        <div className='max-w-md'>
            <input
                type='email'
                placeholder={t("Home.email_placeholder")}
                className='px-6 py-3 border-2 text-[var(--secondary)] border-[var(--secondary)] rounded-lg w-full bg-transparent mb-4 placeholder-[var(--secondary)]'
            />
            <button
                className='px-8 py-3 bg-[var(--secondary)] text-white font-bold rounded-lg hover:bg-[var(--primary)] transition-colors w-full'
                onClick={handleKeepMePosted}
            >
                {t("Home.lets_connect")}
            </button>
        </div>
    )
}