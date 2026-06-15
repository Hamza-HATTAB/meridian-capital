import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactForm } from './ContactForm';

// Mock the React hooks
vi.mock('react', async () => {
  const actual = await vi.importActual<typeof import('react')>('react');
  return {
    ...actual,
    useActionState: vi.fn(),
  };
});

vi.mock('@/actions/contact', () => ({
  submitContactForm: vi.fn(),
}));

import { useActionState } from 'react';

describe('ContactForm', () => {
  const mockAction = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly in initial state', () => {
    vi.mocked(useActionState).mockReturnValue([{ success: false }, mockAction, false]);

    render(<ContactForm />);

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Institution \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Institutional Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nature of Enquiry/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Request Discussion/i })).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('shows pending state when submitting', () => {
    vi.mocked(useActionState).mockReturnValue([{ success: false }, mockAction, true]);

    render(<ContactForm />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Submitting…');
  });

  it('shows success message', () => {
    vi.mocked(useActionState).mockReturnValue([{ success: true }, mockAction, false]);

    render(<ContactForm />);

    expect(screen.getByText('Enquiry received.')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('shows global error message', () => {
    vi.mocked(useActionState).mockReturnValue([
      { success: false, error: 'Global API error occurred' },
      mockAction,
      false,
    ]);

    render(<ContactForm />);

    expect(screen.getByText('Global API error occurred')).toBeInTheDocument();
  });

  it('shows field-specific errors and sets aria-invalid', () => {
    vi.mocked(useActionState).mockReturnValue([
      {
        success: false,
        error: 'Validation failed',
        fieldErrors: {
          name: ['Name is too short'],
          email: ['Invalid email'],
        },
      },
      mockAction,
      false,
    ]);

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Full Name/i);
    expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Name is too short')).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/Institutional Email/i);
    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Invalid email')).toBeInTheDocument();

    // The other inputs should not have errors
    const institutionInput = screen.getByLabelText(/^Institution \*/i);
    expect(institutionInput).toHaveAttribute('aria-invalid', 'false');
  });
});
