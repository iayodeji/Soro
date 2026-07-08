// components/SoroBackground.tsx
export default function SoroBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none select-none bg-[#FDFBF2] overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" className="w-full h-full object-cover">
        <defs>
          <filter id="auraBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="150" />
          </filter>
        </defs>
        <rect width="1440" height="900" fill="#FDFBF2" />
        <circle cx="1200" cy="300" r="400" fill="#CFA331" opacity="0.15" filter="url(#auraBlur)" />
        <circle cx="1350" cy="700" r="350" fill="#B74A26" opacity="0.12" filter="url(#auraBlur)" />
        <circle cx="1000" cy="600" r="450" fill="#7A8452" opacity="0.10" filter="url(#auraBlur)" />
        <g fill="none" stroke="#1F1612" strokeWidth="1.5" opacity="0.08">
          <path d="M -50,530 C 50,320 150,740 250,530 C 350,320 450,740 550,530 C 650,320 750,430 850,430 L 1440,430" />
          <path d="M -50,530 C 80,400 180,660 280,530 C 380,400 480,660 580,530 C 680,400 780,480 880,480 L 1440,480" />
          <path d="M -50,530 C 110,480 210,580 310,530 C 410,480 510,580 610,530 C 710,480 810,530 910,530 L 1440,530" />
          <path d="M -50,530 C 140,630 240,430 340,530 C 440,630 540,430 640,530 C 740,630 840,580 940,580 L 1440,580" />
          <path d="M -50,530 C 170,710 270,350 370,530 C 470,710 570,350 670,530 C 770,710 870,630 970,630 L 1440,630" />
        </g>
        <g stroke="#1F1612" strokeWidth="1" strokeDasharray="2,6" opacity="0.1">
          <line x1="950" y1="350" x2="950" y2="700" />
          <line x1="1050" y1="350" x2="1050" y2="700" />
          <line x1="1150" y1="350" x2="1150" y2="700" />
          <line x1="1250" y1="350" x2="1250" y2="700" />
          <line x1="1350" y1="350" x2="1350" y2="700" />
        </g>
        <g strokeWidth="1.5" fill="#FDFBF2">
          <circle cx="1050" cy="430" r="4" stroke="#B74A26" />
          <circle cx="1250" cy="580" r="5" stroke="#B74A26" />
          <circle cx="950" cy="630" r="3" stroke="#B74A26" fill="#B74A26" />
          <circle cx="1150" cy="480" r="6" stroke="#CFA331" />
          <circle cx="1350" cy="530" r="4" stroke="#CFA331" fill="#CFA331" />
          <circle cx="1050" cy="630" r="3" stroke="#CFA331" />
          <circle cx="950" cy="480" r="4" stroke="#7A8452" fill="#7A8452" />
          <circle cx="1250" cy="430" r="3" stroke="#7A8452" />
          <circle cx="1150" cy="580" r="5" stroke="#7A8452" />
        </g>
        <g stroke="#1F1612" strokeWidth="1" opacity="0.15" fill="none">
          <polyline points="1050,420 1050,400 1150,400 1150,470" />
          <polyline points="1250,590 1250,610 1150,610 1150,590" />
        </g>
      </svg>
    </div>
  );
}