import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#080B14',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid rgba(232,255,71,0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 900,
              fontSize: 14,
              color: '#F5F7FA',
              lineHeight: 1,
              letterSpacing: '-0.5px',
            }}
          >
            F
          </span>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 900,
              fontSize: 14,
              color: '#E8FF47',
              lineHeight: 1,
              letterSpacing: '-0.5px',
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
