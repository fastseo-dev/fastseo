import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: 'linear-gradient(135deg, #080B14 0%, #0D1220 100%)',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 900,
              fontSize: 80,
              color: '#F5F7FA',
              lineHeight: 1,
              letterSpacing: '-3px',
            }}
          >
            F
          </span>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 900,
              fontSize: 80,
              color: '#E8FF47',
              lineHeight: 1,
              letterSpacing: '-3px',
            }}
          >
            S
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
