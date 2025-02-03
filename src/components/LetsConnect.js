"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

export default function LetsConnect({ locale }) {
    Amplify.configure(outputs);
    const client = generateClient();
    const t = useTranslations();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleKeepMePosted = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setError(t("Home.invalid_email"));
            return;
        }
        setError("");
        setIsSubmitting(true);

        try {
            await client.models.Email.create({
                content: email,
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Failed to write email", error);
            setError("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md">
            <input
                type="email"
                placeholder={t("Home.email_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-3 border-2 text-[var(--secondary)] border-[var(--secondary)] rounded-lg w-full bg-transparent mb-4 placeholder-[var(--secondary)]"
                disabled={submitted}
            />
            {error && <p className="text-white mb-2">{error}</p>}
            <button
                className="px-8 py-3 bg-[var(--secondary)] text-white font-bold rounded-lg hover:bg-[var(--primary)] transition-colors w-full"
                onClick={handleKeepMePosted}
                disabled={isSubmitting || submitted}
            >
                {t("Home.lets_connect")}
            </button>
            {submitted && (
                <p className="italic mt-4">
                    {t("Home.thank_you_message")}
                </p>
            )}
        </div>
    );
}
