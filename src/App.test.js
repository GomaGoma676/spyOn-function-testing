import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

it('Should fetch func be called when clicked', async () => {
  const spyFunc = jest.spyOn(console, 'log')
  render(<App />)

  userEvent.click(screen.getByRole('button'))
  expect(await screen.findByText('loaded')).toBeInTheDocument()
  expect(spyFunc).toHaveBeenCalledTimes(1)
})
