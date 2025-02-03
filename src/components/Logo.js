import Image from "next/image";

export function Logo() {
    return (
        <Image
            src="/aminatalogo-30.png"
            alt="aminatadiatta"
            width={500}
            height={500}
            quality={100}
            priority
            style={{
                imageRendering: 'crisp-edges', // Prevents blurring
            }}
        />
    );
}