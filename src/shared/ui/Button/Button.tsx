/* eslint-disable no-unused-vars */
import {
    ButtonHTMLAttributes, ReactNode, memo,

} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  DEFAULT = 'default',
  SVG_CLEAN = 'svg_clean',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props : ButtonProps) => {
    const {
        className, children, disabled, theme = ThemeButton.CLEAR, ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(styles.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>

    );
});
