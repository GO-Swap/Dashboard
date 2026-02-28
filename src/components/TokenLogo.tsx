import React, { useState } from "react";

interface TokenLogoProps {
  addressOrSymbol: string;
  size?: number;
  address?: string; // Para fallback por endereço
}

const DEFAULT_ICON = "/dashboard/logo.jpg";

// TrustWallet: https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/{address}/logo.png
// CoinGecko: https://assets.coingecko.com/coins/images/{coingeckoId}/thumb.png
// S3: /dashboard/logos_bep20/{addressOrSymbol}.png

export const TokenLogo: React.FC<TokenLogoProps> = ({ addressOrSymbol, size = 32, address }) => {
  const [srcIndex, setSrcIndex] = useState(0);

  // Endereços para fallback
  const sources = [
    // TrustWallet CDN (precisa do endereço completo)
    address ? `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${address}/logo.png` : null,
    // CoinGecko CDN (precisa do id, aqui usamos símbolo como fallback, pode customizar)
    `https://assets.coingecko.com/coins/images/${addressOrSymbol.toLowerCase()}/thumb.png`,
    // S3 local
    `/dashboard/logos_bep20/${addressOrSymbol}.png`,
    // Fallback
    DEFAULT_ICON
  ].filter(Boolean);

  const handleError = () => {
    setSrcIndex((prev) => (prev + 1 < sources.length ? prev + 1 : prev));
  };

  return (
    <img
      src={sources[srcIndex] ?? undefined}
      alt={addressOrSymbol}
      width={size}
      height={size}
      style={{ borderRadius: "50%", background: "#f5f7ff", objectFit: "contain" }}
      onError={handleError}
    />
  );
};
