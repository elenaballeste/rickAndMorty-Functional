import { render, screen } from '@testing-library/react';
import Characters from './Characters';

describe('Characters component', () => {

  test('renders characters list', async () => {
    // Arrange
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce()
    render(<Characters />);

    // Act
    // ...nothing

    // Assert
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });

})
