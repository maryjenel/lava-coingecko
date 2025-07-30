import { Coin } from "@/app/services/types";
import { render } from "@testing-library/react-native";
import React from "react";
import MarketItem from "../MarketItem";

const mockItem: Coin = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  image: "https://example.com/bitcoin.png",
  current_price: 12345.6789,
  price_change_percentage_24h: 5.6789,
  // Add any other required Coin fields if your Coin type includes more
} as Coin;

describe("MarketItem", () => {
  it("renders name and symbol correctly", () => {
    const { getByText } = render(<MarketItem item={mockItem} onPress={jest.fn()} />);

    expect(getByText("Bitcoin (BTC)")).toBeTruthy();
  });

  it("renders current price formatted correctly", () => {
    const { getByText } = render(<MarketItem item={mockItem} onPress={jest.fn()} />);

    expect(getByText("$12,345.679")).toBeTruthy();
  });

  it("does not render current price if undefined", () => {
    const noPriceItem = { ...mockItem, current_price: undefined };
    const { queryByText } = render(<MarketItem item={noPriceItem} onPress={jest.fn()} />);

    expect(queryByText(/\$/)).toBeNull();
  });

  it("does not render percentage change if undefined", () => {
    const noChangeItem = { ...mockItem, price_change_percentage_24h: undefined };
    const { queryByText } = render(<MarketItem item={noChangeItem} onPress={jest.fn()} />);

    expect(queryByText(/%/)).toBeNull();
  });
});
