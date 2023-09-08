import { render, screen } from '@testing-library/react';
import BannerArea from '../components/HomePage/BannerArea/BannerArea';

test('renders banner area title', () => {
  render(<BannerArea />);
  expect(screen.getByText(/PERFECT PLACE FOR YOUR STORIE/i)).toBeInTheDocument();
});