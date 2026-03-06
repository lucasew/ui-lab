import React from 'react';

import './button.css';

/**
 * Configuration options for the Button component.
 * Used to control the visual hierarchy and interaction states.
 */
export interface ButtonProps {
  /**
   * Defines if the button represents the primary action on the view.
   * Primary buttons usually feature higher contrast and should ideally be used once per view context.
   * Defaults to false (renders as secondary).
   */
  primary?: boolean;
  /**
   * Overrides the default theme background color.
   * Use sparingly, as custom colors may break contrast accessibility guidelines.
   */
  backgroundColor?: string;
  /**
   * Controls the padding and text sizing of the button.
   * - `small`: Used in dense interfaces or secondary actions.
   * - `medium`: Standard sizing for general forms and calls to action.
   * - `large`: Prominent actions, useful for hero sections or main conversions.
   * Defaults to 'medium'.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The text displayed inside the button.
   * Should be concise and verb-led (e.g., "Save", "Cancel", "Submit").
   */
  label: string;
  /**
   * Callback fired when the button is clicked or activated via keyboard (Enter/Space).
   */
  onClick?: () => void;
}

/**
 * An interactive UI element that triggers actions or submits forms.
 * Composes a standard HTML button with predefined sizing and semantic variants.
 *
 * Inherits standard HTML button attributes implicitly via `...props`, but exposes
 * typed, high-level modifiers via `ButtonProps`.
 *
 * @example
 * <Button primary size="large" label="Checkout Now" onClick={handleCheckout} />
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
